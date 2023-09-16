import { Dropdown } from "antd";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";

export const Filter = () => {
  
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          name="country"
          placeholder={"Country"}
        />
        <Input
          name="region"
          placeholder={"Region"}
        />
        <Input
          name="address"
          placeholder={"Address"}
        />
        <Input
          name="zip_code"
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          name="room"
          placeholder={"Rooms"}
        />
        <SelectAnt >
          <SelectAnt.Option>Select sort</SelectAnt.Option>
          <SelectAnt.Option>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt>
          <SelectAnt.Option>Select category</SelectAnt.Option>
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          name="min_price"
          placeholder={"Min price"}
        />
        <Input
          name="max_price"
          placeholder={"Max price"}
        />
      </Section>
    </MenuWrapper>
  )

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
