import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h3 className="text-4xl font-bold p-4">海豚电商工具</h3>
      <p>电商人必备的效率工具</p>
      <div className="flex flex-wrap justify-center mt-16 gap-16">
        <a href="#" className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-green-500 ">
          免费试用
        </a>
        {/* <a href="./account" className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-green-500 ">免费试用</a> */}
        <Link className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-yellow-500 " href="./account">
          登录注册
        </Link>
      </div>
      <div className="flex flex-wrap justify-center mt-16 h-12">高效、安全、包更新</div>
      <div className="flex items-center justify-center mt-16">
        <span className="mr-2">©2024 海豚电商工具</span>
        <a href="https://beian.mps.gov.cn/#/" target="_blank" rel="noopener noreferrer">
          沪ICP备20017523号-1
        </a>
      </div>
    </main>
  );
}
