import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h3 className="text-3xl font-bold p-4">海豚电商工具</h3>
      <div className="w-100 leading-12 text-lg my-8" >
        <p className="mt-2">🎉 <span className="font-bold">海豚导单</span>-拼多多商家自发货必备的效率工具，自动批量解锁导出订单。</p>
        <p className="mt-2">海豚导单是一个浏览器插件，可以将商家后台你看到的代发货订单信息导出成csv表格。</p>
        <p className="mt-2">目前插件只能导出单页订单，多页订单需要手动翻页再导出。</p>
        <p className="mt-2">🚨 自动解锁功能可能触发风控，请悉知！</p>
        <p className="mt-2">👀 只能获取网页上显示的隐私手机号，无法获取真实手机号。</p>
        <p className="mt-2 font-bold">🛡️ 高效、安全、包更新 🛡️</p>
      </div>
      <div className="flex flex-wrap justify-center mt-16 gap-16">
        <a href={`/download/haitun.zip?${new Date().getTime()}`} className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-green-500 ">
          下载试用
        </a>
        
        <a href="/install" className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-yellow-500 ">
          安装指南
        </a>
        <a href="/tutorial" className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-red-500 ">
          导出教程
        </a>
        {/* <a href="./account" className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-green-500 ">免费试用</a> */}
        {/* <Link className="h-auto rounded-[24px] py-4 px-8 mt-8 text-white bg-yellow-500 " href="./account">
          登录注册
        </Link> */}
      </div>
      <div className="flex items-center justify-center mt-16">
        <span className="mr-2">©2024 海豚电商工具</span>
        <a href="https://beian.mps.gov.cn/#/" target="_blank" rel="noopener noreferrer">
          沪ICP备20017523号-1
        </a>
      </div>
    </main>
  );
}
