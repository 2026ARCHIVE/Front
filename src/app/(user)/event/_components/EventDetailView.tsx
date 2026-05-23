"use client";

import Image from "next/image";
import React from "react";
import { type EventItem } from "../_data/eventData";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[20px] font-bold text-black">{children}</h3>;
}

function GrayBox({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 bg-custom-lightgray">{children}</div>;
}

export default function EventDetailView({ item }: { item: EventItem }) {
  const bannerSrc = item.imageUrl;
  const hasHowTo = (item.howToSteps?.length ?? 0) > 0;
  const hasBenefitText = item.benefitItems?.some((entry) => entry.kind === "line");
  const hasBenefitImages = (item.benefitImageUrls?.length ?? 0) > 0;
  const hasCaution = item.cautionItems?.some((entry) => entry.kind === "line");

  return (
    <div className="flex flex-col">
      <div className="relative h-[184px] w-full bg-gray-200">
        {bannerSrc ? (
          <Image
            src={bannerSrc}
            alt={`${item.title} 배너`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col p-5 gap-2.5">
        <div>
          <div className="text-[20px] font-bold text-black">{item.title}</div>
          <div className="mt-1.5 flex flex-col gap-0.5 text-[13px] font-normal text-custom-darkgray">
            <div>
              <span>{item.timeRange}</span>
            </div>
            <div>
              <span>{item.location}</span>
            </div>
          </div>

          {item.descriptionLines && item.descriptionLines.length > 0 && (
            <GrayBox>
              <div className="flex flex-col p-2.5 text-[13px] font-semibold text-custom-gray opacity-40">
                {item.descriptionLines.map((t) => (
                  <div key={t}>{t}</div>
                ))}
              </div>
            </GrayBox>
          )}
        </div>

        {hasHowTo && (
          <div className="pt-2.5">
            <SectionTitle>진행 방법</SectionTitle>
            <div className="flex flex-col">
              {item.howToSteps!.map((s) => (
                <div
                  key={s}
                  className="border-b border-[#ECEEF0] py-2 text-[16px] font-semibold text-black"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {(hasBenefitText || hasBenefitImages) && (
          <div className="flex flex-col gap-2.5 pt-2.5">
            <SectionTitle>혜택 안내</SectionTitle>
            {hasBenefitText && (
              <div className="flex flex-col gap-4">
                {(() => {
                  let lineIndex = 0;
                  let sectionIndex = 0;
                  return item.benefitItems!.map((entry, index) => {
                    if (entry.kind === "section") {
                      const currentSectionIndex = sectionIndex;
                      sectionIndex += 1;
                      return (
                        <h4
                          key={`section-${entry.title}-${index}`}
                          className={`text-[16px] font-bold text-black ${
                            currentSectionIndex > 0 ? "mt-2" : ""
                          }`}
                        >
                          {entry.title}
                        </h4>
                      );
                    }

                    const imageUrl = item.benefitImageUrls?.[lineIndex];
                    const currentLineIndex = lineIndex;
                    lineIndex += 1;

                    return (
                      <div
                        key={`${entry.text}-${index}`}
                        className="flex flex-col gap-2"
                      >
                        <p className="text-[14px] font-semibold leading-relaxed text-black">
                          {entry.text}
                        </p>
                        {imageUrl ? (
                          <div className="relative aspect-[350/123] w-full overflow-hidden bg-gray-200">
                            <Image
                              src={imageUrl}
                              alt={`${item.title} 혜택 ${currentLineIndex + 1}`}
                              fill
                              sizes="100vw"
                              className="object-cover"
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>
        )}

        {(item.cautionImageUrls?.length ?? 0) > 0 && (
          <div className="pt-2.5">
            <div className="flex flex-col gap-3">
              {item.cautionImageUrls!.map((url) => (
                <div
                  key={url}
                  className="relative h-[170px] w-full overflow-hidden bg-gray-200"
                >
                  <Image
                    src={url}
                    alt={`${item.title} 유의사항 안내 이미지`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {hasCaution && (
          <div className="pt-2.5">
            <SectionTitle>이벤트 유의사항</SectionTitle>
            <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[12px] leading-relaxed text-custom-darkgray">
              {item.cautionItems!
                .filter((entry) => entry.kind === "line")
                .map((entry, index) => (
                  <li key={`${entry.text}-${index}`}>{entry.text}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
