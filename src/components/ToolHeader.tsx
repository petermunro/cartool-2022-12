export interface ToolHeaderProps {
  title: string;
}

function ToolHeader({ title }: ToolHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default ToolHeader;
