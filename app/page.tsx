"use client";

import React from "react";

import { Divider } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { LuAlertCircle, LuDroplet, LuWaves, LuTornado } from "react-icons/lu";

const Page = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            fontWeight: "900",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            textAlign: "center",
            margin: "3rem 0 3rem 0",
          }}
        >
          탄소발자국 계산기
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ margin: "4rem 0 4rem 0" }}>
          <h1
            style={{
              fontWeight: "900",
              display: "flex",
              alignItems: "center",
              color: "#CC3300",
              fontSize: "28px",
              gap: "8px",
            }}
          >
            <LuAlertCircle size={36} /> 탄소배출량을 줄여야 하는 이유
          </h1>
          <div
            style={{
              fontWeight: "800",
              marginTop: "1rem",
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <List spacing={1} alignItems="center" fontSize={20}>
              <ListItem>
                <ListIcon as={LuDroplet} color="blue.500" boxSize={8} />
                기후변화에 의한 극심한 가뭄과 홍수 발생
              </ListItem>
              <ListItem>
                <ListIcon as={LuWaves} color="blue.500" boxSize={8} />
                해수면 상승으로 인한 생태계에 치명적인 영향
              </ListItem>
              <ListItem>
                <ListIcon as={LuTornado} color="gray.500" boxSize={8} />
                연안 지역에 해수 범람과 폭풍 피해 증가 등이 있다.
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
