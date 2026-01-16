'use client';
import Button from '@/components/Button';
import { FrameType } from '@/constants/frames';
import { frameIdAtom } from '@/store';
import cn from '@/utils/cn';
import { useAtom } from 'jotai';
import Image from 'next/image';

interface FrameProps extends React.ComponentPropsWithRef<'div'> {
  value: FrameType;
}

function Frame({ value, className, ...base }: FrameProps) {
  const [frameId, setFrameId] = useAtom(frameIdAtom);

  return (
    <div
      className={cn(
        'bg-base mx-2 flex flex-col gap-2 rounded-sm text-center md:flex-row',
        className,
      )}
      {...base}
    >
      <Image
        className="aspect-a4 self-center rounded-tl-sm rounded-bl-sm object-cover md:self-start"
        src={value.src}
        alt="frame-pic"
        width={250}
        height={100}
      />
      <div className="flex size-full flex-col items-start justify-start gap-2 p-2">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="text-start text-xl font-bold">{value.label}</div>
          {frameId === value.id && (
            <div className="font-text text-start text-lg font-bold text-green-300">
              Chosen
            </div>
          )}
        </div>
        <div className="md:text-body text-start text-sm">{value.desc}</div>
        <Button
          onClick={() => {
            setFrameId(value.id);

            console.log('FRAME: ', frameId);
          }}
          text="Choose frame!"
          className="mt-auto self-end rounded-sm px-4 py-1"
        />
      </div>
    </div>
  );
}

export default Frame;
