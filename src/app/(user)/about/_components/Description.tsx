import React from "react";

export default function Description() {
  return (
    <div className="p-5.25 flex flex-col gap-2.5">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-semibold text-[20px] text-black">
          상명대학교 2026년도 대동제 <br />
          Deer for U: ARCHIVE
        </h1>
        <p className="text-[16px] text-custom-darkgray ">
          2026.05.23(목) - 24(금)
          <br />
          상명대학교 천안캠퍼스 일대
        </p>
      </div>

      <p className="bg-custom-lightgray p-2.5 text-[13px] text-custom-darkgray">
        상명대학교 2026년도 대동제의 컨셉은 ‘Archive’로 보관이라는 무엇아래에
        도장을찍어 무언가. 캡션을 작성해주시면 됩니다.
        <br />
        <br />
        분량은 약 2문단 정도 나오게 해서 제작국이나 그런 곳에서 작성해주시면 될
        것 같습니다.
      </p>
      <div className="flex flex-col gap-2.5">
        <h2 className="font-bold text-[13px] text-black ">
          대동제 참여 유의사항
        </h2>

        <ul className="list-disc pl-4 flex flex-col gap-0.75 text-[12px] text-custom-darkgray marker:text-custom-darkgray">
          <li>
            부상 예방을 위해 참가자는 빠르게 달리거나 격렬하게 움직일 때 주의
          </li>
          <li>농부 역할을 맡은 사람은 과도하게 힘을 주지 않도록 주의</li>
          <li>체험 전, 게임 규칙과 안전 수칙을 참가자들에게 충분히 안내</li>
          <li>
            농부는 도망자와 적당한 거리를 두고 추격하며, 다칠 위험을 줄인다
          </li>
          <li>
            게임 중 수박이 터지거나 파손되지 않도록 조심하고, 게임 종료 후
            청소는 반드시 진행
          </li>
          <li>
            더운 날씨에는 음료수 및 그늘막을 준비해 참가자들이 건강을 유지할 수
            있도록 한다
          </li>
        </ul>
      </div>
    </div>
  );
}
