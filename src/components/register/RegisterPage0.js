import React from "react";

import { Box, Button, Flex, Image, Text, Link, Grid } from "@chakra-ui/react";

export default function RegisterPage0({ setRole, setPage }) {
  return (
    <>
      <Flex justifyContent="center">
        <Flex w="37%" p="10" mt="100" direction="column">
          <Flex justifyContent="center">
            <Text fontSize="3xl" fontWeight="semibold">REGISTER</Text>
          </Flex>
          <Box mt="8">
            <Grid templateColumns="repeat(2, 1fr)" gap="20">
              <Box p="3" borderRadius="lg">
                <Flex justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="2xl" fontWeight="semibold">CLIENT</Text>
                    </Flex>
                    <Image src="data:image/png;base64,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" />
                    <Button mt="3" variant="outline" borderColor="black" borderRadius="50" onClick={() => {
                      setRole("client");
                      setPage(prevPage => prevPage+1);
                    }}>Hire Now!</Button>
                  </Flex>
                </Flex>
              </Box>
              <Box p="3" borderRadius="lg">
                <Flex justifyContent="center">
                  <Flex direction="column">
                    <Flex mb="2" justifyContent="center">
                      <Text fontSize="2xl" fontWeight="semibold">WORKER</Text>
                    </Flex>
                    <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFhUXGRcZGBcYFhoYGRgZGhcaFhgVFhcbHSghGB4lHhcWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mICUvLS0tLy0tLS0vLS0vLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xABLEAACAQIDBAYGBwQGCgIDAAABAgMAEQQSIQUxQVEGEyJhcYEHMlKRobEUI0JygpLBM2LR4SQ0Q1OishVjc5OjwtLi8PGD8hYXJf/EABoBAAMBAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA4EQABAwIDBAkDAwIHAAAAAAABAAIRAwQSITEFQVGBEyJhcZGhscHwMtHhFFLxFUIkJYKSk6Ky/9oADAMBAAIRAxEAPwDcaKKKEIooooQiiiihCKKKKEIpvi8UkSNJI6oii7MxsAO8mlWcAXJsBvJqg7Sxq4+cFAZMJACVNvq58RewIv8AtEjFzfcSeOlKr1m0mF7kylTL3QFK/wD5/hN4E5j/AL0YaXq7c82W9u+1e5On2A3Ru8x5QwySfELb400wsw9VtG79Ce/WlQuTdop4cATy7j/5xrDO2n/sHirjZsBgz85JLFdMJ3UjDYGYMdA+ICxxrf7TKGLkDfYAHwqBOGmxD/XYqaUn2ZGhiA39mOMjTvJJNWmo2WIJMpGgfMD96363+FSVdp16sCY7sk6jRptnLPdKZx7JxEPaw2NmRvYkZpYj3FXLEX5jWrF0Y6SGdmgnQRYqMXZAbq67hLETvU8t4Ohppeo3bGzI5srPcNHqsiMVkS+9kcai2/yPOmWm06lN0VDI8T5rmrQa8cCtCorPS+0IyAmOMjAaLLBHkYDddksw7ze9Wbovtz6VG2ZOrmjbJNHe+VwL3B4qQQQa36F3SrmGFZ9Sg+mJOinKKKKpSUUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIRSUkljYC5+Xea60gG8iqh0zxru6YGFiHxAvI6nWPDro5B4Ficg8TXL3BokrprcRhMsbjH2jI0am2BRirMpIOKdd6Kd/UqdCR63DulEAAAUAKAAABYADcABuFLNCmHgyIAoChFA4C1gBTOM2A8K+X2lWNR4k8ty0qDcskpNErCzC/wAx3g8KbPLkBWQ3UjR/0bkfn8A4zUZqzQVSAvUbXAJ32F/G1M9qyW6s8nB+BpTEYpUF2PgOJ8BTUI0hDyDKo1VOJ7zXoXTGwcR09U8bQkVwmvBa+tcvXJKIXc/1atxTQ+AOV/lfyFMzjvoWMOJYA4eZY45yN8bKW6uY817WU8rg91OM+W9/Ubf3G1rnuI91vGyiwKUKt21YWOaxBW1reFvnVNvXdQqCoPgXD2Bwgq6qwIuNRXqqZ0GxrRtJgJCSYgHgY72gJsF7zGez4FaudfYUqjajA9uhWNUYWOLSiiivDuBvNqYuFyRrD/zWk2kcC5AtyvrXJZB2WGoB1t3ivSC/abdwHLvPfQhLA12kMOb3PAnSl6EIooooQiiiihCKKKKEIpN3sDzApLrSDlIueHDTvrijKxza5uP6GhC6LKBpcn4957qpXRd1lafGPb+kO2S/2YIiY47cgxDt5ipzphiWgwOKkXeImCm+oZhkX4sKrqQCFUjNrRRxxj8KgHxJN6zNp3HRMHaVZa0ukn583KSxUoZrgaDdf50jnprE7OQEUm/E6D+PwrsctwDzANfMPLnHE7etUMDRATnPRnpvnrjyWF6WvcKQjbNMSdQLgeQJ/hT0tUdgfX8c3+Uinmauiu3jNLZqM1I5q7mrlcwlc1JxNlOXgRcd3MfEH315vXiU7jyI+PZ/WvQiE22zP1DwYwb4HGfvhksko77Ahvw1pQN9RWe4uISI8bbnUqfAi361O9B9os+Aw7PqVXqn554iYyTzvlv519FsWqSx1M7sxz/Kzb+nEO5KzE03Vh2mbgSPC1ce91c7uW+3fXTFrmWx424X5ittZy4Ra7keXd386U+jry/h7q5kZrZrADhvv40vQhFFFFCEUUUUIRRRRQhFJSS20AJPdSl6ShOrc7/DhQhJJY3VxYnjz/nXokgZWBbkQN/jyNesUOz33FvG9diY6g7x8eRoQq16Qk/oJQm4abDA+BxEelQe35D1rWOvWN/zCl+l+2I55ThmkEWHhdGnk3s8ikSJh4RY3IsrMQDbQeNU6QdNsEkrCOKaR9/aso113tdvhWJtNrqzg2nmRqtSyIptl2/56ZqZ2ZLaZGJ+0NT7qdDNuFrDQHXdw0tWcYjp5iDYRxxoDuvdj+g+FOeju2sVPOEllJDK1gtk7QsRqtj6objWd+grYc4HP7Kvp2F2Xcr+EY/a9wH63rpw995Y+dvlaqX0zxZw8QXMTJJcLdyxUD1n1PC4A72HKqRgcJiJzZA78yWNh4sTby312zZjnNxF8cvyvH3Aa6AFta4aMf8A2P8AGva4aPl/iP8AGskl6I4kC46tj7Ksb+WZQPjUPJCyEqylSN4IsRXQ2ZOlTy/K5dcOGoIW7DBJyP5m/jXfoCciPxH9TWGxzMNzMPAkVdeiU8rQ9tn0aytnYEiw3kHWx0v+oNc1NmlonH5flDK5c6M1fvoI4O48x/CvMmBYggOPNf1BqBSeQbpJPN2b/MTSE/SbqjZ8Ut/ZIjJ9yrep/wBHUnIg+P2TS5wzJVilidfs3+6b/A2Nd6AbTjifEYWZgjmd5IkfskpIqk5QfW7WfdVen6WSKIZV6qVJGZAVutiBffmOu8bha1KYrpFhp0yYrDEjuYMV/eUnKVPeKptDUtKmItkERke1JqsdWZh9Fq9iu7VTw5fyrsC8RcA8D86zTZHSeXCIHMjYnB3sesuMRD4FrdcouNN+uhNq06NwwBGoIBB7jqK+io12Vmy3+FkVKTqZgpSiiinJaKKKKEIooooQik55MovXJGIsBvP/AJc0his4RjoRlOm7hwoQqhtf0ibPgkkhvLNJGbP1KZrNxUOSFJG42OhFjUZ/+0kYjLgMc37wRA1vAMQT51iWyx2Y/wAPzFb5NM2Y3N9Tv148L7vKs+/vTahsCZnyj78Qqra36ac9ITrD9P8AAXHXtLA53DExtGAeXWax38GNWjZ2JjlXrI5EkDa5kYMvdYg2NUs5SLFfcdPMG9/fUVJ0WwhbPGgik9uJmw7/AJoyAfM1JS2yDk9vgfYwU99h+0+P3E+itm2OhGHmdpFaSJ3OZshUqzbsxjkVlBtvKgE1kfpQ6IvgpYpes6xJQyXEeTKydpQe0QSwLbreodKu8SbSgt1OPd1G5cVGswP/AMq5X87mmWDlbHgYrH5XUErFCmYQLkOR5il7uWYMBm3AeFqW3Ns8F7R1t+UHPj4LkU64IY45d8+CyON9QLVYeicLPiosptlJcnko0Pvvl/FUv0t2fD1DypGiMhUjq1CDVgLFQBw5i9K+jXCdiSY72IUeC8feW91Lc8FhcO5PFOHgc0rtvo4Z8UZp3HV2CxxqTcqouc54XZmNh3ai1TEOHjjRczJDHuUaC/ci8T4U62kvq+dQ+3Ma0eG6+MlZZ5Wj60etHEuayRn7Fwq6i29jv1rmm01ZxGA0bvbtXdRwpAYRm4/OSfyYiAC5XEge2cLPl/N1VrUzxWFw+JQlHSVV0JQjMh5Eb18DoeIqpbB2pHGkmIhxDxY1JQEjAYiRBYs8zbmUksMpPDvuNS6UbFhxUC4pV6jEdUJFlTsst0D5H9teBU76obah30kh3bHtCnddln1QWnsPus6j6IkyAXBTuvmPdlta/ffyqzzwiCO7Dq0UcdwA/X41J9GMxgV3Azsqlrbr5QSB5k036VmEiNJ2jVLs56xgqkqAoGu/9pfyqMvLzB8lYA1n0jxWW7c6QSSu2V2SPcFBy3A4tbfe503VHYEA3sPdWs4LZMRXNh2gYf6sLb8y3pnjtndcrR5e0dALaq/2WHIg601tZoGGICS6iXdac+5VLovhOuxUGGLlY5pbmwuQyRuc6ggi9hYm3s33VsEfo4wygZp8XIOQkVB5iNFqp+hPY/WzS41l7Ma9TECPtuA8p/CMqfiatmrQZRbHWAJWe+s6YaYCrGA6E4FHEn0cMw3GVmla/P6wkDyqz0UU4ADIJJcTmSiiiivV4iiiihCKKKKEJqwKtmOoOnhxruKlURtqPVPypwRTOWLKG0uCDrxGnyoQvlLZXqx/h/St4m9ZvE/OsI2V6sX4f0rbpjL9IINuqs1rDXNcesffasTbTMQZnpiP/nTtWjs8wXcvdRnSfpHHg0UspeR7iOMGxa28k/ZUaa99QeyunkjlmlwjCJNXkibrOrB+06WBygakjdyqt9Npi+0Zr/2SRIvgV6w/FqsfotYocQ9r3KgaFhbIARYG/PupVOyt6dn01YTIB7gYiOXevK13V6UhmgMK8YXEBlDxtdWAIZToQdQQRvFQfRuMnApGPWjMqMP3lndre5gfOvGw8P8ARJzhNerkhTFwC3qCTSaIW0ssmoA4PSuIZsLK8ticPKQZLC5iksB1tvZYAX5EXqWmz9PWdRceEeo5kGFY14qNFQJtPhA91cXBFnUjSx3X5agEcezT/YGBSGIIl8oJtc3Opvv46k16xu0I2S66i183C2/z3UJiAkYY3ygnNYXIGpvYVXO5MI3p9JCGFjTXF7Fjkg6gs4S+YeoSrX3r2QeJGp3E07ws6uoZGDKdxBuD50utete5uhSnsa6JCqmD6AxrKGeTrY73ZMvVM1uBYZ7jgd3iKtvSrHZ8OyIjgv2N3qqdGbMhKrZb2132HGvQpOfEBLXuSxsoAuSbXsPIE8tKfTuXsBAhJfbNeQTKb7HP1fgT+lU30hbQ6vFwK8jxRMqBpFBOW7tmbs9o2AHZXfVtws2R2zqUDai40Bpn0r2ZFiEQmQKVcAMLMbPZTpcXF8rHXcppVF+B4P4TqzMQI/KbdDsHDjYcR1mksDAQ4tFEUxRs2XPb1rZLkNe4YA3tc+ExErRNILdfIy4eKwsGlY9V1gHAWBfuHhU7hcMMJhGiwsN3O9ywYsxsDIwIXUDXKL7rUdFcAHxkafYwUIax/vpgVUnnljWT89Wuw1cDZk7z2KNhdSxuiBuCunR7Y0WDw8eHhFkQeZJJZmPeSSfOpOime0NoRQIZJpFjQWBZyFFzoBc8Tyq9QJ5RTHZm1IMQmeCVJVvYlGDWPI23HuNPqEIooooQiiiihCKKKKEIpLEeo3gflStFCF8jbJ3Rfg+Yrd5fWbxPzqk9JfRjjMPO8mEiE2Gz50RGAljUnMUyNYMAbgWJNrVPwdJMPJIYyxilv+xnUwyC+tsr2v5XrD22xzmsIEgYp7NFo7Pc0FwJ1j3VD9IeE6vHCS3ZnjFj+/H2SPylT51P+jYHq5SLetxvyGvf4fGp7pJsNMXCYmOVgQyOBco43G3EcCOINZycJtPCkxiGU3PrQr1iMd2YG3Y87GlUqrLqy/Tlwa4QM9IBy8so3R2hcXdB7KmMDI5rS9tzxvidlNEyuDhcRdlNxlAhA1HJgR4ipOqX6PujD4brJ51CyyaKgN8iaE5iNMzEC9vZHldBUW1KzKtwSzMZBW2jCykA5UP0jYPqY45YB1YLlJMnZDZ1JBYDTepF/wB6rB0Zn6zDoTrdVJ79LH4g0+23sxcTA8L6BxofZYG6sPAgGoLofh5YU6iYAPGxXQ3BVrujqeRPWAfdp9rVD6OEnrAnwP2OS6gteeBHmE52PgFRpIgSjoRlKm10Pqkrub2dRfsndU4keJXfGJBzQgN5ox+RJ7qr/TPCS9WMTAxWWHXTin2gRxA3++rD0T24ZsNDLJa7rqVG4glTdfEcL+Arcotp3LOsOsN4yWbXdVt3y09U7ju+dhCBtOMGzkxt7MgKHyDWvS7Ir23G2oIOoO64I1G8++rPAEkX7LqedmHgRTeTorg2/sQh5xs0X+QgGlvsI+l3j912y+n6m+Hz3VTlwbRktEAQd6tcjxtcX+dJw7OdzeUKi+wi2LdzEk2HcLX3HSrNL0SA/Z4mZe5sjj4qD8aZS7HxierJDL3MrRH3jODSDZ1RoAfnJOF3SOpjkfZFVePCTPj8U0GLmwzKuH/Z5WVsyH9pG4Ie2XTlmPOpz6WytllidDe1xZwTa+mXtbhvIFMNlPbHY23s4Xh+4/OpKxqUGuObSAPUJnVqDKCE8i2ztmD1lwuNUDgWw0pP+KP5VDdKulwmkw30rCYnDRRF5JGdOsjz5ckeV48wNg0lyQLaeVsEg4j3fwNewRwPv0/l8aS3alYtwuhwPI/ORSxbNa4OblHMfOarGyttYVMTBiMLNEwd0gnVGHaSQ5Y2ZeBSQrqRuZudTeO6ZSyymPAiHIpIM8wdldhvESJYsosRnJAJ3X3002p0UwWIuZsNGxP2wuVv94lj8ah4Nkx4KZI42fq3GZQ7l8uUhHVSdQtmTTxqmhtDq9GAQe3h2fwjoQ98u4buKsuE6W4mGREx0URjkZUGIw7NkVmNlEsb9pATpmuQKmsP0x2e8nUri4S97WzgXO6ysdGPgTVU6R4TrcLNHxKNb7y9pfiBTXYSxzYZUdFeMhSEYBlAKgjKD6vlY1Y29IHWErh1m06LVKKyPZ0kwaTDR4zExRxSlIlUxtlUojgM7ozuAWICk2sAKuvQ/bUkyvBiSPpMNsxAsJUPqTqvAHUEDcyndpVlOux5gaqWpbuYJKs9FFFOSEUUUUIRTDauycPiUyYiGOVeTqGt3i+494p/RQhUPE+joR64DFS4blE/18HgEc5l8m8qicSu0sN/WcH1yD+1wh6zjvMDWcc9M1alRUlexoVs3tz4jI/nnKfTuKlP6Sst2Zt3DTnLFKpcb0PZkBG8GNrMPdUlU/0p2Rs6ZQcekHJZJCsbD7ktwy8NxquydCpkXPs7HlkNysWJ+vjPILMtpFHm1ZFbYrhnSdPYfv8AwFZTvx/eOYXsVE7WGWaNuEgMRP74+sh18RKvjIK7idoYrDf13BSoo/toP6RDb2jkGdB95a99dhsdCyxzK6m3ajYZkYEMrW3qwIB1FZ3RVLd4dUaQB2e+nmq21WVB1CnsDhlB57/1FMsHhThTaNM8GYtkX14yxu2UHR1ub23jW19AGMWNkhcJPZXJssm6KbwP9lJ+6dDwPCp3D4lW03NxU6H+da1Gs5hxsP2Pzx7kurSZVbDh+FM7IxMEwzRMCRocpKuv7rroy+DCrDhyeJv4gX+H8Ko2IwMbkMy9sbnUlXH3XUhh5GlosZiovUxGYcpoxIAPvJlbzYmtFt80/UI81A6xIPVM/PD0V4kFRuLmIBPVsfDJ+rVDR9JcTuMUD96zMn+Eo3zpOfbuIYELh4we+cm3fYRU5t1R/d6pTrar+30+6axYgu7ki2Vivib9pvOyi3JRUPslv6fjO9cP8A4qZgRszEhRmy6Bi2oRUJuVG/LfdxNQOyW//oYj96ND+WRx+tYl+7GHmZ/kQtOg3CwCIVkFdFcrtYacvSkjdpUR0ow7vGkiKWaJ82VQMzIQVdRzOoa3EoKlq5LKqqWZgqqCSxIAAG8knQCu6byxwIXhG9VCLpfCtw7rcixDhlItbehF/KmewNprCMhuilmMYcFM8VyUy5gMwF7eAFSOI9Iuzla3WM+tsyROy33WDW18r1L7L27g8YCIpEkt6yMLMLaaxuAR42rTfXqsEupkDtn3HqliownIj5zUCzNLiJpMLGZIyEL2IuHF0shvlc5QpK3uLd4BUaXESMnUxyriFPYmaJ4+qGgYOzKAyEDVe1m5cauURygBdANwsLDwG4UoJOY91JN86Zbl8+bgvTMRGSYQ9K9oxaYnALMOMmElBPlDLlP+I09wfpE2exCSythnP2MTG0B/M4C+40oCOfv0qC290iwUWaPEMHI0MfVmTyOhUeZFXW+07h3V6PF3T7SFC+3YM5jvWj0UUVvqJFFFFCEUUUUIWY9KsKsu1isqhguGjKBhcAGSQNYHmQNe6vWAAwGIjlh7GHldY54h6gLnJHOq7kIYqGtvDd1IdK8ao2uz5ltHhoo2uQO0ZJJLflYUy6R7dgbCzoGBLRsAMy3zW7NrG972rLqvLbgkLWpMx0ADw91sFUbpVs7ZEjuZ1X6QgLFoMy4gHvaKxvqNG01FKw7cbHERQS9XEABLMpHWSNbtR4cfZF98v5b7xORbKiSMRRr1aqbqV0ZW9u51LHW5N81ze4JrUWSsvkjfJlhxJxETDWDHQMzWtc/0iBWW/wB5eG+o3ZGMnJlVYwUi6v6h5Q7oGuD1OIF9ARoG0sRurQ9v4YuhmGk0JtNl0zAWIkHgCGvyuNSotGNEsgziyswyMwHEai44ruNuFza1YzqeGq6lhEkS2ARijURMYhrlnrnx02vApiqCYmDJktO4zE4T8lMNm7cVzkV+3/dS9iT8JOj+IJqVXHrezgoeTD9armNwqt9XOgOttdRf908D8fHfT6HY0iqDhsS6qR+zlAnj8Bm7S+RpDXNeJaclY5pbqPnp4KcGRvZb3GlNF5Ae6q2+Hxo9bDYaXvjleL4MLD30hIcXmjT6NDCZGKq0krTWIRnPZWw3Kd9ekQJJC4kKex+1441ZywsN7E2UeJ4nuFyai+juGd52xTKUQx9WgbRnGfrDKy/ZBOgG+2tOcD0dUMJJ3M8i+qWACJ/s4h2V8dTU3WdcXLXNws8fsPv4LoBeqK5XRUS9Xayz0o7XaXEDBqfqo1V5QD67tqit3BbNbm3cK1MVivTeMjaeKvx6ph3gxKNPMEeVamyGNdcSdwJHfkPdSXjiKccSkeieDWXFWYXEUEkoHDNpGp8i9x3itW2zsLDz4VWysmIiAMU62WRCFJuGWxZd/Zb4b6yjoxixFixm3TRtDfhcsri/jltWvxlerAOexI3k21sPE+dad5WqU6waDk7Ljw9yVn9UtHH57LxsXGzCSTB4u30mEAlgLLNEdExCDhe1mA3MLd1TApr6SsOI/ouPXRoJkjkN/WgnYRODzsxjYX3WNO6yNpWzaFaGaHMdnEe/NaFtUL2Z6hFYl0ulP0/EkEj61xpp6py/pW3Vg/SBr4vEnnPOf+K1V7EHXeewe6Ve6N5r6mooor6JQIooooQisw6a46bE41sGsjxwwqmdUYqZXkGbtMNcgW2nO/dbT6yrpX9VtaU/3kEMvjlLREe4Cp7okUjCptADVEpLCdFcGot1Cn71z8zS42Bgwxvh4tALdgU7zqFzyOFHMmw13V4/0hDpeVb8LG587VkifkrTKazdFME4JbDoOVrrbv7JGteOh2Olw+Niwpld4ZllAR2LdW8a5rox1AIBFt2tO59qrbTO/hG1vMgGo3orIsm00ZjYQwSyDMCpLORH2VYAnRqfbF3SAJVcDoiStAmsMUARdZYyrA8Spuo9xk99VHDRmN5IT9ktbvyXKk+Ka+YqydaXxMX4m8gAv/NUN0iHV4wtwIjc9+9D8IxTNqyym2uNWOB5aEc8lPYDG59H97SOYzHhmmW0oQwBIBB7LA8dOzfyBH4a8bJlRSEdnRODqb5PvqwIK94sRxvvD2WPR17m966j5W86iqy70m0uyWZtdDo3GZnznSIlaVgG3VsGv1blO8bx9uSt/wDoWXes0bA6jsEacDmDkH3VX+lmzpfqU69YpOszq0a5igCsjN29LWe1ra3pXYe3Dh+y9zDroNTGd91HFTxHDeOIMfisW0ztK299w5KPVX438SafcXdv+nx0h1jkBrB7QZBjdlB7pSqNpXNfo6h6oznLPh+d4z7CmqbS2jBIkcsMeKD5srQnqpCVF2Bjc5Wa2tlI08KkMD0qwsjdWzmGXjDOphkF+GV7X8ia5thm6kyp68ZSdD+8tmt53tVsf6LjYlGIijkVgGAkUMLEXBUn1TrTBYULgnD1dHCNC1wxDI8M25RoounqU2gnPUGeIMekHvlMKKrPSLo4ME6DZ+IlgzAkws3XQAAi1ke5W923N9muLtrHQf1rCdav97hTn8zC1nHkTWdX2dUpOIBB8j55eBJ7FVTr4m4oIHj6Z+ICtFZz6WNjkGPGoLhR1U1uCE3R/JiQfvCrlsnpJhMQcsMyl+MbdiQW33jazfCns0IkDK4BQgqVO5gRYhuY7qRQqPtqweRpqDrGh/H4RUa2qyAVh+xYw2Ihvr2wfga2PCxl2iszFesh47/rF4jUi3M1n21+hWIwsnXYG8sQN1QkdZH3Lf8AaLw5+O+mM3SHaBXq1gxEbaWyQyhwQbjKDcKbjgK26+G6fTq03iG6yYIzk5fOPBZZY+m6CFrvpYObZksVwGlmw0UY5scRG1h5Kx8qUx0pWORhvVXI8QCRVU6M4PaOI6mbaj3EBZoIiqq2dhbrZgmmZVuFG8XJNjvuDoGBBAIIsQdxB3g1DtS5ZVrNDcw3zkifJV21MtYSd6jOj+2lxAtukFsy/wDMvd8vni21HvPMeckh97k1vuGjVbBQALjQCw9wr56Z7knmb+/Wrdkljn1XMEAxlM8d/pr3pV0HANDjJz9l9aUUUVtKRFFFeGcDeaELwJhx0N7W+VY30p2w2JxyTiww4Z8NG3tmxLODxUuLD7vfV76dbRK4fJExWbEMIUI+wGBMjjwQOb87VT+kWz1+glIwFMAV4xy6vXTndQ3vqK7qRDOOvzvVtpT/AL/napbBmwXNwAty3b6dqSTfWw3Uy2FjBLCr9w+Vx8KXfHgbkkbwjf8AhWar09FU/FTpHtGBywRR9IDk6AIEJ17s26p2XHTEHJA/ibA+QYikugGyYcTiJ551DSQMqRxNrkBXOJSNzFiTblkPHc+2YTUCXXcG0neCsfRWVJw2JQ3U3Re4KTe4O43JPgRyqL6XuDiQOUS382ktT7pOhwT/AE2AXWR0TEQ7lfN2VmX2JAbC+5r686g8Uss0jSuuUtbQm2VRoAL6nifEmu9q1R0PQjNzogDMwDrA+ZpOzG4awquIDROZIGcRGadq/qt3K3nYE/G9RWITKzLyJHuNSiKAqgtqBbQX4nnbhaksRh1ZicxF7fZHAAe13VLeWtavQo4WnEGwREbhxjSD4pljdUqFeoHOhp01OjjGnYVG0lhvVt7JI8gdPhapP6GOZ/KP+qkI8EudwG9ltRzBXgT7FZ39OuwINM+R9Fq/1K1Jyf5H7J2q5o9eMbD3BgP8oo6MnE/RIWGGMkYBQNHIpayMY+0j5fZ4FqWw8dgozKbaHeN5J4gc6mfRyx+iFT9iadf+KzfrW7ZtLHMBEHow0giPpcePesG4c1wfhMjGSO5w/AVF2htResYz5oWJsqzI0VgPVUFwAeehOpNTs+1okj61m7BtYjtFmOgRQPWYnQAVoUyKwIYAqd4IBHmDUHB0bwIlEiYaJHBJDIgXUi2YAaBt+tr019nidixar1t4A0Nw6Kv4HodHiiJ9pQqS62jivbqUOvadbHrTYXIPZ3DiTzFdB8RBf6DjXCbxDiQZ4/uhxaRB5mrzf7D7uB5/zr1CTu3jgf0NUmhTc3AWgjtUhqOLsU5rNcVtTFwC2MwMioDrNh7zxWGuYgASIPFak9lbZw+JXNh5kkHHK1yPvLvXzFX6q9tvodgcU2eWBRLvEsZMUoPPrEIY+dxWbW2PRf8AQcPmPPPzVDLx4+rNMa7UdL0T2hh9cJi1xCD+yxg7VuNsRGLk/eU+NMJekbQaY/CzYX/WW66Dfb9tHcD8QFZFbZlxT/tkdmflr4AqplzTdvj54KfdrAnkCfcK+eI9w8BW8y4+KTDSyxSJIojkOZGDDRCd4rBl3Vp7FHUf3j0U14ZIX1tRRXiRwBc1tqNe6bxalieBsO6gI51zWPK2nhXlL3JGjfaU/MUIVF9KQeKTB4sD6qIyrIQPVMoQIzW4dlhfhcc6r+P2/A6duSNV49sG/wDGtakF9JCtuK77+N+FMsFsPCqxkTDQoSdCIkU+NwL1LWtekdimFXRuujbESst9H2MUxGPNqmmulxcsp15hvhVtaVRvYDzFTO3eh+GxT9a2eOW2XrInyMRwDaFWt3g0wj9HOG+3PipByabKP+Gq1O6ydiyIhPbeMjMGVEbQ29h4VzPIB4m3z3+V6c+jfCSmbE4po2jilWNYw4Ks+UuS+U6he0ACd9WbZXRbBYc5ocPGr+2Rnf8A3jXb41NU+haimcROaRWusbcICgenEObAYnmsZkHjFaUfFKq3WCwJIFwDqdddd2+rvt8f0We/91L/AJDWbbNwhMUZJAuiHfc+qOX60u8uK9EgUG4i7sJiOwd+pyC9tqFGqCaz8Ib3Zz/HBP2xCcyfAafEj5V4+mL7J/MB+hrgwS8WJ8gP1Ne/oqfvfmH/AE1Af6u8yMv+Meuar/ytmWZ/3fj0Xj6cvsn83/bSIxi9YeydVHEHcT3D2qdfR05H838qQbCp1g9b1W+0Oa/u0dHtUf3ebPde9Js06NP/AG+6XXEpzI8Rp8CamvRy4MWJANwMVLbwZUb9agWwae0R5A/qKlvR2h/pihrATjcN94k1+FVWj701MNyMoP7df9OWinuG2YpzbkzlIM6cxx71cX1YA7rX8a9vGCN38qRcG4BNmHqtwPca9MW3Eqvf/CtRZ65A+YWYfz4UuoA3UggBYZdy318eFOaEIooooQiuEV2ihCqW1/R7s+csyxHDyMGBkwzGFjm9bMF7L345lPGs8216HsXGb4WeOdfZk+qcfiAKt/hrcKKELw7gb/8A3SErgizKQOfL+FdBOftcjal2tbXdQhJRPbstv4HmKUZASDxFJQC6C/l79KcUIXgoN9h7q90UUIRRRRQhFN8biBHG8hFwisxHPKCbfCnFMdt/1af/AGUn+Q0IWZYrpJj5utVGzAqytHljCAOCosTZgd9u0d2t6c4OdY4kWS6FVVTdH3hQD2rZfjURg9oJCZC4axtqACBYvvF7/a4CnZ2lGdzgeN1P+K1Num4Xlrerw7RzmVDsx+OgHOdiOrs9Dwy0y3KRGPjOq3Yd1re+5oGNXkfzf9tMLZiWUgEi5BvlNhvDDdp47h41Er0iw/F7HlY183dnaNN+TiRuIDfRon7r6m0Zs+ozrAA7wXH1kD5mrH9OHsn30kcaue5U6KePMju7qrs/SWIDsKzH3D31Azbcn64PcajVOFgd1eUGbTqycRHfl6he137MpkCAe6THmtD/ANIKd8b28Qfhapf0dzDNjCL5DKmp3j6pd9ZzJ0ryqWaE6Ak9scNeVax0L2I+HWYyMrNMyuQoOVewBlBOrabzpVdkL7pP8ROHdMa8s1Ld/ouj/wAOc+zFpzVldARY0FAd4v411VsLCvVaqzVwCu0UUIRRRRQhFFFFCEUUUUIXiRARY03Vdcrk92uhp3XCKELtFFFCEUUUUIRRRRQhFNNpFRDIWGZcj5gDa4ym4vw0p3RQhfP20ifrGGUJ2iBcsQN4GbKL8r1I4PHoqEsp3+yDqTlGu7eQKd9NNkHDmRisZWSey23r1h6z1baWDW0PCoQj6tBzeP8AzBv0qPaFUV3AlpESMzPz14rrZVobVjhiBxGchHv+ErtbDrHhmIFmOVfiCfgDVZWrB0qn0jj8XPuyr8291V+9P2c0ijJ3krnaDgasDcEniZsosN5+HfXjBsSxJ5fwpvIxJJP/AKHClsC1m8RVqi3JbaanqpPun5V9QQoFUAbrV8y4xboRzsPeQK+nqXU3J9HQoooopaciiiihCKKKKEIooooQiiiihC//2Q==" />
                    <Button mt="3" variant="outline" borderColor="black" borderRadius="50" onClick={() => {
                      setRole("worker");
                      setPage(prevPage => prevPage+1);
                    }}>Work Now!</Button>
                  </Flex>
                </Flex>
              </Box>
            </Grid>
          </Box>
          <Flex mt="38" justifyContent="center">
            <Link href="/register">
              <Text fontWeight="semibold">Login</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}