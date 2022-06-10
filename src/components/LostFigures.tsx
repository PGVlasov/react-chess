import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigures: React.FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h1>{title}</h1>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}
          {figure.logo && (
            <img width={20} height={20} src={figure.logo} alt="" />
          )}
        </div>
      ))}
    </div>
  );
};
