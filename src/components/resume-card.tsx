'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || '#'}
      className='block cursor-pointer'
      onClick={handleClick}
    >
      <Card className='flex'>
        {/* <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div> */}
        <div className='flex-grow  items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='font-space-grotesk text-lg '>{title}</h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {period}
              </div>
            </div>
            {subtitle && <div className='font-sans text-muted-foreground text-xs'>{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-2 text-xs sm:text-sm'
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
