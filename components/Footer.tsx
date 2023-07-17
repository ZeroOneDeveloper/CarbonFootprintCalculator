"use client";

import React from "react";
import { Divider, ListItem, UnorderedList } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div
        style={{
          marginTop: "24px",
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1 style={{ fontWeight: "800" }}>
            가정 내 탄소 배출량을 줄이는 방법
          </h1>
          <UnorderedList style={{ fontWeight: "600" }}>
            <ListItem>실내 온도를 1도씩 높이고, 낮추고!</ListItem>
            <ListItem>샤워 시간을 1분만 줄여요!</ListItem>
            <ListItem>사용하지 않는 콘센트는 빼놓으세요!</ListItem>
          </UnorderedList>
        </div>
        <div />
      </div>
      <div
        style={{
          fontSize: "24px",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <div />
        <div>
          <h1 style={{ fontWeight: "800" }}>
            일상생활에서 탄소 배출량을 줄이는 방법
          </h1>
          <UnorderedList style={{ fontWeight: "600" }}>
            <ListItem>에너지 소비 효율이 높은 제품을 선택합니다.</ListItem>
            <ListItem>친환경 소재 제품을 사용합니다.</ListItem>
            <ListItem>쓰레기를 줄입니다.</ListItem>
          </UnorderedList>
        </div>
      </div>
    </div>
  );
};

export default Footer;
