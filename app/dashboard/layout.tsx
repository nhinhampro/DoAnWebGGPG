import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'The Graduation Project Showcase',
  description: 'The-Graduation-Project-Showcase'
};

export default function DashboardLayout({
                                          children
                                        }: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}