import { Squid } from "./squid"

const squid = new Squid(
    "squid",
    {
        namespace: "default",
        storageClassName: "civo-volume",
        storageSize: 50
    },
)