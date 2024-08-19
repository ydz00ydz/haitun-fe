import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h3 className="text-3xl font-bold p-4">海豚电商工具</h3>
      <div className="leading-12 text-lg my-8 w-full p-2 sm:w-2/3 sm:p-10" >
        <p className="mt-4">🎉 <span className="font-bold">海豚导单</span>-拼多多商家自发货必备的效率工具，<del>自动批量解锁</del>导出订单。</p>
        <p className="mt-4">海豚导单是一个浏览器插件，可以将商家后台你看到的代发货订单信息导出成csv表格。<b>它的主要作用是一键导出订单</b>相比您自己手动复制订单节省了大量时间。并且您解锁点开收货信息后，<b>收货信息也可以一起导出</b>。</p>
        <p className="mt-4">目前插件只能导出单页订单，多页订单需要手动翻页再导出。</p>
        <p className="mt-4">🚨 自动解锁功能可能触发风控，请悉知！根据目前客户反馈，部分商家可以稳定自动解锁，部分自动解锁几十单后就频繁跳滑块，甚至影响后续手动解锁（过几个小时~几天可慢慢恢复）。这个风控规则不透明，我们也无法保证，<b>强烈建议都手动解锁</b>。</p>
        <p className="mt-4">👀 只能获取网页上显示的隐私手机号，无法获取真实手机号。</p>
        <p className="mt-4 font-bold">🛡️ 高效、安全、包更新 🛡️</p>
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
