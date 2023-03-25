import Link from 'next/link';
import { HeroAnimation } from '@/components/animation';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          신입 프론트엔드 개발자 최승수입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          보이는 피고, 인간의 우는 소금이라 칼이다. 낙원을 피가 인류의 위하여, 것이다. 것은 작고 피어나기 그들의 이상의
          소금이라 열매를 쓸쓸하랴? 끝까지 별과 아니한 하였으며, 것이다. 그들에게 모래뿐일 천자만홍이 어디 것이다. 것은
          몸이 싶이 곧 우리의 봄바람이다. 없으면 피어나는 이상 구하지 우리의 할지라도 이것은 청춘의 것이다. 것은 간에
          용감하고 피다. 방황하여도, 긴지라 되려니와, 대고, 든 부패뿐이다. 그들의 안고, 굳세게 무엇이 청춘의 것은 구하지
          같은 지혜는 이것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <HeroAnimation />
      </div>
    </>
  );
}
