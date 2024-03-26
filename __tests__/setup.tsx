import "@testing-library/jest-dom";
import React, { type PropsWithChildren } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { setupStore, type RootState, type AppStore } from "../src/app/store";
import { Provider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      user: {
        users: [
          {
            id: 1,
            name: "Ashtyn Bogan",
            username: "Bart65",
            email: "Maxine.Schmidt@yahoo.com",
            address: {
              street: "ducimus vel ex",
              suite:
                "Non sunt est quis qui reprehenderit nemo eos et eligendi. Et qui voluptates laudantium sequi libero consequatur temporibus velit aut. Sunt quisquam voluptatum architecto. Quo eveniet cum eos dolore tempore.\n" +
                " \rAut voluptatem soluta incidunt. Cumque quia ipsa doloremque ad voluptas autem iure quia odit. Consequuntur aut sint.\n" +
                " \rExcepturi omnis voluptatem sed consectetur sapiente. Doloribus qui vero laboriosam cupiditate maxime alias. Rerum sapiente omnis debitis illum libero repellat est sunt.",
              city: "Sit corrupti omnis nihil. Veniam consequatur eligendi et iusto magni nesciunt itaque.",
              zipcode: "hic rerum nisi",
              geo: {
                lat: "18.4565",
                lng: "-120.0123",
              },
            },
            phone: "887-441-7789",
            website:
              "Aut laboriosam optio tempore amet. Voluptate facilis ab. Debitis et ratione accusamus beatae pariatur qui sequi est. Et et nulla amet et voluptatibus ullam.",
            company: {
              name: "Emilio Lakin",
              catchPhrase:
                "Voluptas aspernatur cumque dolores. Aut repellat veniam. Ea occaecati consequatur magnam quos ratione ipsam id voluptas et. Ut omnis eos officiis.\n" +
                " \rOmnis aspernatur eaque voluptatem nisi unde et in. Voluptas et est ipsam suscipit culpa nostrum sed. Quia quas vel maiores. Vel voluptatem sed quod deserunt.\n" +
                " \rEt molestiae dicta ratione corporis corrupti. Vel voluptas qui doloribus sit omnis fugiat. Voluptas repellendus quaerat et et nostrum sed porro voluptatem doloremque. Quidem distinctio nemo id officia facere ea ipsam fugiat.",
              bs: "Eaque perferendis facilis odit omnis. Aperiam iste culpa. Commodi aliquid quis rem voluptatem sunt id sint consequuntur voluptatibus. Omnis voluptatem qui praesentium repudiandae laboriosam quisquam.",
            },
          },
          {
            id: 2,
            name: "Alison Hartmann",
            username: "Jamar.Dooley",
            email: "Brad36@hotmail.com",
            address: {
              street:
                "A autem dolorem a aspernatur et vero eum necessitatibus dignissimos.",
              suite:
                "Sunt aut molestiae sunt. Libero sunt est id fugit explicabo omnis molestiae quo quis. Nesciunt laboriosam laboriosam consequuntur exercitationem facere quasi rerum est laudantium.\n" +
                " \rMagnam magnam et laudantium repudiandae natus. Nihil qui quia deserunt aut. Libero dolor nemo aut corporis rerum exercitationem. Rerum iste debitis sit fugiat similique iusto. Maiores est eos labore molestias aut sed sapiente.\n" +
                " \rPerspiciatis iste aut. Mollitia mollitia cumque vel similique aut iusto eligendi. Amet eligendi praesentium.",
              city:
                "Dignissimos magnam non quae.\n" +
                "Occaecati dolores sunt cupiditate vel.\n" +
                "Et eum at sint vel eius nam porro qui.",
              zipcode: "accusamus",
              geo: {
                lat: "18.4565",
                lng: "-120.0123",
              },
            },
            phone: "530-980-6049 x84124",
            website:
              "Quo repellendus quia distinctio eos molestiae beatae quo dolorum.",
            company: {
              name: "Ressie Hirthe",
              catchPhrase:
                "Vel sed eligendi fugiat. Voluptatum mollitia nam. Vitae error possimus quisquam nobis est. Amet enim doloremque veritatis corporis cupiditate fuga est accusantium ut. Veritatis exercitationem facere dicta porro culpa consequatur quo. Harum quos id et non rerum laboriosam.\n" +
                " \rUt rerum sed eligendi sint. Dolor vero voluptas perferendis expedita quidem recusandae deserunt quisquam. Temporibus qui consequuntur facere doloribus quasi ad quis. Molestiae natus cupiditate nobis mollitia cupiditate.\n" +
                " \rEarum vel sed mollitia alias voluptatum. Ut nihil iure ipsam eius. Qui necessitatibus accusantium qui nihil quam doloremque tempore. Maxime dolorem quos quas officiis molestias enim ullam. Iure amet expedita quia non est omnis temporibus. Fugit et eum autem in.",
              bs: "Veniam consequatur sit fugiat. Nemo non perspiciatis modi eum commodi harum. Suscipit ullam quis voluptatem nisi soluta. In qui beatae. Assumenda et modi perferendis eius aut dolorem. Velit quibusdam et reprehenderit harum qui ipsum saepe.",
            },
          },
          {
            id: 3,
            name: "Loma Littel",
            username: "Madeline54",
            email: "Mustafa33@gmail.com",
            address: {
              street:
                "Adipisci ut enim accusamus rerum. Veritatis est id. Accusantium architecto aperiam a. Saepe cupiditate ad quidem architecto. Sed iure adipisci corrupti velit saepe maxime rerum rerum aut.",
              suite: "ea expedita ut",
              city: "Itaque enim fuga beatae voluptas. Et ut adipisci illum occaecati libero ullam eaque harum error. Doloribus quisquam nesciunt placeat dignissimos sed tempora sit ipsum. Quos magnam et dolore corporis est modi perspiciatis. Iusto esse totam delectus.",
              zipcode:
                "Eveniet officiis aliquam et neque numquam animi. Ut et fuga. In temporibus ratione id ut sint ratione esse. Modi et beatae dolores minima inventore commodi accusantium iusto soluta. Blanditiis et explicabo quo vero nesciunt.\n" +
                " \rQuidem veritatis velit cupiditate laboriosam nobis. Saepe et maiores quod repellat dicta sunt aut. Et non dolores tempore facere explicabo velit est.\n" +
                " \rUt perferendis ad excepturi aspernatur in cum nesciunt. Eaque ut et possimus. Quasi voluptates commodi magni. Mollitia vero ipsam fugit rerum. Sint enim alias hic. Iure ratione unde aliquam et nihil incidunt omnis necessitatibus neque.",
              geo: {
                lat: "18.4565",
                lng: "-120.0123",
              },
            },
            phone: "1-445-400-0100",
            website:
              "Ut blanditiis illum id. Dolores nisi veniam possimus. Qui aut sunt fugit quia est qui.",
            company: {
              name: "Michaela Deckow",
              catchPhrase:
                "Enim omnis et voluptatibus aut recusandae.\n" +
                "Quidem asperiores aut sapiente labore.\n" +
                "Ducimus doloribus unde quia at vitae.\n" +
                "Ea consequatur iste alias dolor.\n" +
                "Qui sunt eum autem vel ipsam ad unde.",
              bs:
                "Iste consequuntur aut culpa aut.\n" +
                "Harum nulla velit dolor est est sed explicabo amet.\n" +
                "Fugiat quia dicta.",
            },
          },
        ],
        selectedUser: null,
        loading: false,
        error: "",
      },
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
