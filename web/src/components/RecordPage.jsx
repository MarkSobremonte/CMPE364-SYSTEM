import { useState, useEffect } from 'react';
import RecordForm from './RecordForm';
import RecordList from './RecordList';
import { getRecords } from '../services/recordsApi.js';

export default function RecordPage() {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getRecords()
      .then((data) => {
        setRecords(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  function addRecord(newRecord) {
    setRecords((current) => [newRecord, ...current]);
  }

  function deleteRecord(id) {
    setRecords((current) => current.filter((record) => record.id !== id));
  }

  if (status === 'loading') {
    return <p>Loading records...</p>;
  }

  if (status === 'error') {
    return <p>Failed to load records. Please try again later.</p>;
  }

  return (
    <main>
      <h1>Records</h1>
      <RecordForm onAdd={addRecord} />
      <RecordList records={records} onDelete={deleteRecord} />
    </main>
  );
}