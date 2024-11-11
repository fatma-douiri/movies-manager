import { FC } from 'react';

type RatioGaugeProps = {
  ratioPercent: number;
};

const RatioGauge: FC<RatioGaugeProps> = ({ ratioPercent }) => {
  return (
    <div className="py-3">
      <div className="relative h-2 w-full bg-neutral-100 rounded-lg">
        <div
          className="absolute bg-neutral-400 h-2 rounded-lg"
          style={{ width: `${ratioPercent}%` }}
        />
      </div>
    </div>
  );
};

export default RatioGauge;
