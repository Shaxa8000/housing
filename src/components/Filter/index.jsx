import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";


export const Filter = () => {

  const countryRef = useRef();
  const regionRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
 
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          name="country"
          ref={countryRef}
          placeholder={"Country"}
        />
        <Input
          name="region"
          ref={regionRef}
          placeholder={"Region"}
        />
        <Input
          name="address"
          ref={addressRef}
          placeholder={"Address"}
        />
        <Input
          name="zip_code"
          ref={zipRef}
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          name="room"
          ref={roomsRef}
          placeholder={"Rooms"}
        />

        <SelectAnt>
          <SelectAnt.Option value={""}>Select sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>

        <SelectAnt>
          <SelectAnt.Option value={""}>Select category</SelectAnt.Option>
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          name="min_price"
          ref={minPriceRef}
          placeholder={"Min price"}
        />
        <Input
          name="max_price"
          ref={maxPriceRef}
          placeholder={"Max price"}
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
        trigger="click"
      >
        <div>
          <Button type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};
export default Filter;
