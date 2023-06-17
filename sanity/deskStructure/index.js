// // import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
// // import { BsFolder as workIcon } from "react-icons/bs";
// import { BsPerson as bioIcon } from "react-icons/bs";
// // import { BsEnvelope as contactIcon } from "react-icons/bs";

export const deskStructure = (S, context) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Menú footer")
        // .icon(bioIcon)
        .child(
          S.documentList()
            .title("Menú footer")
            .schemaType("footerMenu")
            .filter("_type == $type")
            .params({
              type: "footerMenu",
            })
            .defaultOrdering([{ field: "language", direction: "asc" }])
            .menuItems([
              {
                title: "Crear nou",
                intent: {
                  type: "create",
                  params: {
                    type: "footerMenu",
                    template: "footerMenu",
                  },
                },
              },
            ])
        ),
    ]);
