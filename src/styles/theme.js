import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    OrderedList: {
      type : "a"
    }
  }
})

export default theme