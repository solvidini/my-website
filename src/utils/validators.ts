export const required = (value: string) => value.trim() !== ''

interface LengthConfig {
   min: number
   max: number
}

export const length = (config: LengthConfig) => (value: string) => {
   const { min, max } = config
   let isValid = true

   if (min) {
      isValid = isValid && value.trim().length >= min
   }

   if (max) {
      isValid = isValid && value.trim().length <= max
   }

   return isValid
}

export const email = (value: string) => {
   const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+?/
   const isValid = regex.test(value)

   return isValid
}
