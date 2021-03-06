import { Table } from "antd";
import React from "react";
import styled from "@emotion/styled";

import { StatsApiResponse } from "../../../backend/controllers/statistics.controller";
import { StyledTable } from "../DonateList/DonateList.styles";
import { gray } from "../common.styles";

type Props = {
  stats: StatsApiResponse["epics"];
  isLoading: boolean;
};

type Epic = {
  itemId: number;
  name: string;
  url: string;
};

const EPICS: Epic[] = [
  {
    itemId: 6660,
    name: "Ring of Queen Ant",
    url:
      "https://lineage.pmfun.com/data/img/accessory_ring_of_queen_ant_i00.png",
  },
  {
    itemId: 6661,
    name: "Earring of Orfen",
    url:
      "https://lineage.pmfun.com/data/img/accessory_earring_of_orfen_i00.png",
  },
  {
    itemId: 6662,
    name: "Ring of Core",
    url: "https://lineage.pmfun.com/data/img/accessory_ring_of_core_i00.png",
  },
  {
    itemId: 6659,
    name: "Earring of Zaken",
    url:
      "https://lineage.pmfun.com/data/img/accessory_earring_of_zaken_i00.png",
  },
  {
    itemId: 6658,
    name: "Ring of Baium",
    url: "https://lineage.pmfun.com/data/img/accessory_ring_of_baium_i00.png",
  },
  {
    itemId: 8191,
    name: "Necklace of Frintezza",
    url:
      "https://lineage.pmfun.com/data/img/accessory_necklace_of_frintessa_i00.png",
  },
  {
    itemId: 6656,
    name: "Earring of Antharas",
    url:
      "https://lineage.pmfun.com/data/img/accessory_earring_of_antaras_i00.png",
  },
  {
    itemId: 6657,
    name: "Necklace of Valakas",
    url:
      "https://lineage.pmfun.com/data/img/accessory_necklace_of_valakas_i00.png",
  },
];

const Empty = styled.span`
  color: ${gray};
`;

const Title = styled.div`
  padding: 6px;
  img {
    height: 30px;
    width: 30px;
    border: solid 1px rgb(173 165 77 / 40%);
  }
  > div {
    line-height: 16px;
    margin-top: 8px;
  }
`;

const sum = (arg: Record<number, number>) => {
  return Object.values(arg).reduce((acc, curr) => (acc += curr), 0);
};

export const Epics: React.FC<Props> = ({ stats, isLoading }) => {
  return (
    <StyledTable bordered dataSource={stats} loading={isLoading} size="small">
      <Table.Column
        dataIndex={"clan_name"}
        sorter={(a, b) => {
          const { clan_name: nameA, ...restA } = a;
          const { clan_name: nameB, ...restB } = b;

          return sum(restA) - sum(restB);
        }}
        defaultSortOrder="descend"
      />
      {EPICS.map((item) => (
        <Table.Column
          key={item.itemId}
          dataIndex={item.itemId}
          title={() => (
            <Title>
              <img src={item.url} /> <div>{item.name}</div>
            </Title>
          )}
          render={(a) => (
            <div style={{ textAlign: "center" }}>
              {a ? <b>{a}</b> : <Empty>0</Empty>}
            </div>
          )}
        />
      ))}
    </StyledTable>
  );
};
