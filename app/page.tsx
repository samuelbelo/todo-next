'use client';
import Image from 'next/image';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { useEffect, useState } from 'react';
import { db } from '@/db/db';
import { todos } from '@/db/schema/schema';

export default function Home() {
  const [taskName, setTaskName] = useState<string>('');
  const test = async () => {
    return await db.select().from(todos);
  };

  useEffect(() => {
    test().then(res => console.log(res));
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex'>
        <Input value={taskName} onChange={event => setTaskName(event.target.value)} />
        <Button
          onClick={() => {
            console.log(taskName);
          }}
        >
          Add
        </Button>
      </div>
    </main>
  );
}
