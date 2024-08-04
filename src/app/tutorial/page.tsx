import React, { lazy, Suspense } from "react";

const InstallPage: React.FC = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-16">
      <div className="px-16 w-3/4 flex flex-col justify-center leading-loose">
        <p className="text-3xl font-bold text-center mb-8">海豚导单使用教程</p>
        <p></p>
        <p>若插件还没安装，详见 <a className="px-4 py-1 rounded-[4px] text-white bg-yellow-500" href="/install">安装指南</a> 先安装插件。</p>
        <p>1️⃣ 安装成功后，最好把插件固定在浏览器的工具栏上，方便随时使用。</p>
        <img src="/img/dc-0.png" alt="插件固定到工具栏" className="w-1/3 my-4" />
        <p>2️⃣ 插件使用时必须先进入到拼多多商家后台的待发货页面</p>
        <img src="/img/dc-1.png" alt="进入代发货页面" className="w-3/4 my-4" />
        <p>3️⃣ 用密码登陆账号，无账号请先用手机号注册，有24小时免费试用。</p>
        <img src="/img/dc-3.png" alt="手机号注册" className="w-1/2 my-4" />
        <p>3️⃣ 自动解锁功能有风控风险！需要点击确认后才可以使用！</p>
        <p>4️⃣ 一键导出可以一次性导出单页的所有订单，多页订单需要手动翻页后导出。</p>
        <img src="/img/dc-2.png" alt="一键导出订单" className="w-3/4 my-4" />
        <p>如果还有其他问题，欢迎随时联系我😊 WX: <b>bgzdh99</b> (办公自动化99)</p>
      </div>
    </div>
  );
};

export default InstallPage;
