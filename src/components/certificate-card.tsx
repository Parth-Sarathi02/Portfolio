import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
  title: string;
  href: string;
  date: string;
}
export const CertificateCard = ({ title, href, date }: ResumeCardProps) => {
  return (
    <Link href={href} target='_blank' className='block cursor-pointer'>
      <Card className='flex'>
        <div className='flex-grow  items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className=' text-base'>{title}</h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {date}
              </div>
            </div>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};
