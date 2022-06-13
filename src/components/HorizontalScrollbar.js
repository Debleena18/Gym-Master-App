import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    {/* </ScrollMenu> */}
    </div>
  );
  export default HorizontalScrollbar;