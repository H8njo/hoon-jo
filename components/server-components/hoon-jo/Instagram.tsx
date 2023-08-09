import _ from 'lodash';
import Image from 'next/image';

const Instagram = async ({ promise }: any) => {
  const { data } = await promise;

  const [instagram1, instagram2] = _.chunk(
    _.shuffle(_.filter(data, (item) => item.media_type !== 'VIDEO')),
    _.round(data.length / 2)
  );
  return (
    <>
      <div
        className="h-[300px] bottom-[130px]  absolute left-0 flex-wrap"
        style={{
          transform: 'rotate(-23deg)',
          width: 'calc(100% + 400px)',
        }}
      >
        <div className="relative inline-flex gap-[20px]">
          {instagram1?.map((item, key: number) => (
            <div
              key={key}
              className="w-[300px] h-[300px] border-2 overflow-hidden border-black rounded-full flex"
            >
              <Image
                src={item.media_url}
                alt={item.caption}
                width={300}
                height={300}
                style={{ rotate: '23deg' }}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-[300px] bottom-[-200px] absolute left-0 flex-wrap"
        style={{
          transform: 'rotate(-23deg)',
          width: 'calc(100% + 400px)',
        }}
      >
        <div className="relative inline-flex gap-[20px]">
          {instagram2?.map((item, key: number) => (
            <div
              key={key}
              className="w-[300px] h-[300px] border-2 overflow-hidden border-black rounded-full flex"
            >
              <Image
                src={item.media_url}
                alt={item.caption}
                width={300}
                height={300}
                style={{ rotate: '23deg' }}
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instagram;
