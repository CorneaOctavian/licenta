import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack} from '@pankod/refine-mui';





import {
PieChart,
PropertyReferrals,
TotalVenituri
} from 'components'



const acasa = () => {
  return (
    <Box>
     <Typography fontSize={25} fontWeight={700} color="#FCFCF#000000">
      Acasa
     </Typography>
     
        <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
          <PieChart
          title="Proprietati de vanzare"
          value={684}
          series={[75,25]}
          colors={['#475be8','#e4e8ef']}
          
          
          />

          <PieChart
          title="Proprietati de inchiriat"
          value={550}
          series={[60,40]}
          colors={['#475ae8','#e4b8ef']}
          
          
          />
          <PieChart
          title="Total Clienti"
          value={5684}
          series={[75,25]}
          colors={['#275be8','#c4e8ef']}
          
          
          />
          <PieChart
          title="Proprietati in anumite orase"
          value={555}
          series={[75,25]}
          colors={['#475be8','#e4e8ef']}
          
          
          />



        </Box>
        <Stack mt="25px" width="100%"
        direction={{xs:'column', lg:'row'}} gap={4}>
          <TotalVenituri/>
          <PropertyReferrals/>


          

        </Stack>

    </Box>
  )
}

export default acasa