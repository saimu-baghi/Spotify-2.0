import React from 'react';
import { twMerge } from "tailwind-merge";
import Box from './Box';

function Slider() {
    return (
        <div 
          className={twMerge(`
            flex 
            h-full
            `,
            // player.activeId && 'h-[calc(100%-80px)]'
          )}
        >
          <div 
            className="
              hidden 
              md:flex 
              flex-col 
              gap-y-2 
              bg-black 
              h-full 
              w-[300px] 
              p-2
            "
          >
            {/* <Box>
              <div className="flex flex-col gap-y-4 px-5 py-4">
                {routes.map((item) => (
                  <SidebarItem key={item.label} {...item} />
                ))}
              </div>
            </Box>
            <Box className="overflow-y-auto h-full">
              <Library songs={songs} />
            </Box> */}
          </div>
          <main className="h-full flex-1 overflow-y-auto py-2">
            {/* {children} */}
          </main>
        </div>
      );
    }

export default Slider