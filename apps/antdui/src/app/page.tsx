import Image from 'next/image';
import { Button, ConfigProvider, Card, Avatar } from 'antd';
import {
   EditOutlined,
   EllipsisOutlined,
   SettingOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
export default function Home() {
   return (
      <main>
         <ConfigProvider
            theme={{
               token: {
                  // colorPrimary: 'red',
               },
            }}
            prefixCls="my-app"
         >
            <Button
               type="dashed"
               size="large"
               danger
               style={{ borderRadius: 0 }}
            >
               Button
            </Button>
         </ConfigProvider>
      </main>
   );
}
