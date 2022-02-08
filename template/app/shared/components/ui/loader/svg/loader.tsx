import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent({ color, ...rest }) {
  return (
    <Svg width={50} height={50} viewBox='0 0 50 50' fill='none' {...rest}>
      <Path opacity={0.6} d='M9.86 43.16a5.332 5.332 0 100-10.665 5.332 5.332 0 000 10.664z' fill={color} />
      <Path opacity={0.3} d='M44.165 38.43a4.628 4.628 0 100-9.255 4.628 4.628 0 000 9.255z' fill={color} />
      <Path opacity={0.1} d='M39.94 15.09a3.823 3.823 0 100-7.645 3.823 3.823 0 000 7.646z' fill={color} />
      <Path
        opacity={0.7}
        d='M5.658 30.144c3.126 0 5.659-2.472 5.659-5.52 0-3.05-2.533-5.521-5.659-5.521-3.125 0-5.658 2.472-5.658 5.52 0 3.05 2.533 5.521 5.658 5.521z'
        fill={color}
      />
      <Path
        opacity={0.5}
        d='M21.914 50c2.84 0 5.144-2.245 5.144-5.013s-2.303-5.013-5.144-5.013-5.145 2.245-5.145 5.013S19.073 50 21.915 50z'
        fill={color}
      />
      <Path
        opacity={0.4}
        d='M35.134 47.804c2.699 0 4.886-2.13 4.886-4.759 0-2.628-2.187-4.758-4.886-4.758-2.7 0-4.887 2.13-4.887 4.758s2.188 4.759 4.887 4.759z'
        fill={color}
      />
      <Path
        opacity={0.85}
        d='M11.78 17.323c3.267 0 5.915-2.585 5.915-5.774s-2.648-5.774-5.915-5.774-5.916 2.585-5.916 5.774c0 3.19 2.649 5.774 5.916 5.774z'
        fill={color}
      />
      <Path
        opacity={0.2}
        d='M45.628 26.07c2.414 0 4.372-1.922 4.372-4.292s-1.958-4.291-4.372-4.291c-2.415 0-4.373 1.921-4.373 4.291s1.958 4.291 4.373 4.291z'
        fill={color}
      />
      <Path d='M26.459 12.475a6.237 6.237 0 100-12.475 6.237 6.237 0 000 12.475z' fill={color} />
    </Svg>
  )
}

export default SvgComponent
