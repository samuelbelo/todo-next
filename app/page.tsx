'use client';
import {Input} from './components/ui/input';
import {Button} from './components/ui/button';
import {useEffect, useState} from 'react';

export default function Home() {
	const [taskName, setTaskName] = useState<string>('');

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='flex'>
				<Input value={taskName} onChange={event => setTaskName(event.target.value)}/>
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
