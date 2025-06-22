'use client';

import { useState, useTransition, useCallback, useEffect } from 'react';
import { Search, Loader2, FileText } from 'lucide-react';
import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { suggestDocuments, type DocumentSuggestionOutput } from '@/ai/flows/document-suggestion';
import { useDebounce } from '@/hooks/use-debounce';

export default function SearchWithAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<DocumentSuggestionOutput['suggestions']>([]);
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  const fetchSuggestions = useCallback((searchQuery: string) => {
    if (searchQuery.length < 3) {
      setSuggestions([]);
      if (isOpen) setIsOpen(false);
      return;
    }
    startTransition(async () => {
      try {
        const result = await suggestDocuments({ query: searchQuery });
        setSuggestions(result.suggestions);
        if (result.suggestions.length > 0 && !isOpen) {
          setIsOpen(true);
        } else if (result.suggestions.length === 0 && isOpen) {
          setIsOpen(false);
        }
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
        setSuggestions([]);
        if (isOpen) setIsOpen(false);
      }
    });
  }, [isOpen]);

  useEffect(() => {
    fetchSuggestions(debouncedQuery);
  }, [debouncedQuery, fetchSuggestions]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/80" />
          <Input
            type="search"
            placeholder="Tìm tiêu đề văn bản..."
            className="w-full bg-white/90 pl-9 text-primary placeholder:text-primary/60 focus:bg-white"
            value={query}
            onChange={handleInputChange}
            aria-label="Search documents"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2" align="end">
        {isPending ? (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : suggestions.length > 0 ? (
          <div className="flex flex-col gap-1">
            <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Gợi ý</p>
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.link}
                href={suggestion.link}
                className="flex items-start gap-3 rounded-md p-2 text-sm hover:bg-background"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-4 w-4 mt-1 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="font-medium text-primary">{suggestion.title}</span>
                  <span className="text-xs text-muted-foreground">{suggestion.description}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : debouncedQuery.length > 2 ? (
          <p className="p-4 text-center text-sm text-muted-foreground">Không tìm thấy kết quả.</p>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
