export const cityCodeList = ['hong-kong', 'beijing', 'tokyo']

export interface CityImageType {
  name: string
  imagePath: string
}

const imageListLogic = (cityNameList: string[]) => {
    return cityNameList.map(item => {
        return {
            name: item,
            imagePath: `city-${item}-unsplash.jpg`,
        }
    })
}

export const cityImageList: CityImageType[] = imageListLogic(cityCodeList)
