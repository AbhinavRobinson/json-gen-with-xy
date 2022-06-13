"use strict"
import fs from "fs"

const main = async () => {
  let size = 300
  const dir = "./plot_metadata"
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true }, (err) => {
        if (err) throw err
      })
    }
    fs.mkdirSync(dir)
    console.log("GENERATING METADATA FOR PLOT(0,0) to PLOT(299,299)...")
    for (let i = 0; i < size * size; i++) {
      const rawData = {
        name: "Gamespad Land",
        description: "plot metadata for Gamespad Land",
        coordinate: { x: i % size, y: Math.floor(i / size) },
      }
      const dataStream = JSON.stringify(rawData, null, 2)
      fs.writeFileSync(`./plot_metadata/${i}.json`, dataStream, "utf-8")
    }
    console.log("\nMETADATA GENERATED SUCCESSFULLY")
  } catch (error) {
    console.log(error)
  }
}

main()
