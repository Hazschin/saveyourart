"use client";
import { UserData, UserDataAndProps } from "@/typeDef/typeDef";
import React, { PropsWithChildren, createContext, useContext } from "react";

export const UserContext = createContext({});

export class UserProvider extends React.Component<PropsWithChildren> {
  states: UserData = {
    name: "Nombre original",
    whatsApps: [],
    contacts: [],
    images: [],
    products: [],
  };

  state: UserData = {
    name: "John",
    lastname: "Doe",
    stagename: "Yondu",
    userImg: "/profile/user.png",
    whatsApps: [3322114455, 3625149870],
    email: "correo@hotmail.com",
    description: "Lorem ipsum dolor sit amet",
    products: [
      {
        productId: "a1s2dffasfa3asd6",

        title: "AnatomÍa",
        width: 120,
        height: 150,
        length: 5,
        medium: "Óleo sobre tela",
        date: "15-05-2023",
        description: "Lorem ipsum dolor sit amet",
        price: 12000,
        quantity: 1,
        status: "Disponible",

        publishOnCapart: true,
        statusOnCapart: "activo",
        pulishOnVangart: false,
        statusOnVangart: "activo",

        productImgs: ["/assets/anatomia.png"],
      },
    ],
    contacts: [
      {
        productId: "1assf2f36g544a",
        image: "/assets/anatomia.png",
        productTitle: "Anatomía",
        contactName: "Anónimo",
        network: "pinterest",
        username: "Rembrandt",
        phone: 3311224455,
        phoneType: "whatsapp",
        email: "correo@hotmail.com",
      },
    ],
    images: [
      {
        imageId: "1aa2sf3h7jj8w9s",
        name: "Anatomia",
        image: "/assets/anatomia.png",
      },
      {
        imageId: "1aa2sf3h7jj8w9s",
        name: "Conquista",
        image: "/assets/conquista.png",
      },
      {
        imageId: "1aa2sf3h7jj8w9s",
        name: "La tempestad",
        image: "/assets/latempestad.png",
      },
      {
        imageId: "1aa2sf3h7jj8w9s",
        name: "Retrato",
        image: "/assets/retrato.png",
      },
      {
        imageId: "1aa2sf3h7jj8w9s",
        name: "Retrato",
        image: "/assets/anatomia.png",
      },
    ],
  };

  changeTitle = () => {
    this.setState({ name: "Nombre nuevo" });
  };

  render(): React.ReactNode {
    return (
      <UserContext.Provider
        value={{ ...this.state, changeTitle: this.changeTitle }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const useUser: () => UserDataAndProps = (): UserDataAndProps => {
  const context: UserDataAndProps = useContext(UserContext);
  return context;
};
