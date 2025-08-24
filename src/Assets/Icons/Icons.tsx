import React from 'react';
import {
    EyeOutlined,
    PlusOutlined,
    ReloadOutlined,
    DownloadOutlined,
    UndoOutlined,
    DeleteFilled,
    CheckOutlined
} from "@ant-design/icons";
import { TrendingDown, TrendingUp } from '@mui/icons-material';

export const CustomIcons = {
    Add: <PlusOutlined />,
    View: <EyeOutlined />,
    Update: <ReloadOutlined /> ,
    Download: <DownloadOutlined />,
    Clear: <UndoOutlined />,
    TrendingDown : <TrendingDown />,
    TrendingUp: <TrendingUp />,
    Delete : <DeleteFilled/>,
    Success : <CheckOutlined />
};
