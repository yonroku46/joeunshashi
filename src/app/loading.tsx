import Progress from '@/components/ui/Progress/Progress';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - var(--header-height))',
        width: '100%',
      }}
    >
      <Progress size="md" />
    </div>
  );
}