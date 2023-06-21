'use client';

import Button from '@/components/generic/Button';
import { useAppContext } from '@/context/appContext';
import type { Database } from '@/lib/database.types';
import { createBrowserClient } from '@/utils/supabaseBrowser';
import { useEffect, useState } from 'react';

type Machine = Database['public']['Tables']['machines']['Row'];
// Replace these with actual functions
const fetchUserMachines = async () => {
  const supabase = createBrowserClient();
  const { data: machines, error } = await supabase.from('machines').select('*');
  if (error) {
    throw error;
  }
  return machines;
};
const createNewMachine = async (): Promise<Machine> => {
  const supabase = createBrowserClient();
  const { profile } = useAppContext();

  const machineName = 'New Machine'; // replace this with the name input from user
  const ownerId = profile?.id; // replace this with the actual user id
  const newMachine = {
    name: machineName,
    owner_id: ownerId,
  };
  const { data: machine, error } = await supabase
    .from('machines')
    .insert(newMachine);
  if (error) {
    throw error;
  }
  return machine![0];
};

export default function Machines() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    const fetchMachines = async () => {
      const userMachines = await fetchUserMachines();
      setMachines(userMachines);
    };

    fetchMachines();
  }, []);

  const handleCreateNewMachine = async () => {
    const newMachine = await createNewMachine();
    setMachines((prevMachines) => [...prevMachines, newMachine]);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6">Your Machines</h1>

      {machines.length > 0 ? (
        <ul className="space-y-4">
          {machines.map((machine, index) => (
            <li key={index} className="p-4 bg-gray-200 rounded shadow">
              {/* Render your machine data */}
              <h2>{machine.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't created any machines yet.</p>
      )}

      <Button onClick={handleCreateNewMachine} className="mt-6">
        Create New Machine
      </Button>
    </div>
  );
}
