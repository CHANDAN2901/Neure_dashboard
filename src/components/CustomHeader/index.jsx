import React from 'react';
import { Button, Select, Space } from 'antd';
import { LeftOutlined, EditOutlined, FilterOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CustomHeader = ({ 
  title, 
  showBackButton = true,
  showEditButton = false,
  showFilterButton = false,
  onEditClick,
  defaultFilterValue = 'Monthly',
  buttonText = 'Edit'
}) => {
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = React.useState(defaultFilterValue);

  const handleBack = () => {
    navigate(-1);
  };

  const filterOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Yearly', label: 'Yearly' }
  ];

  return (
    <div className="custom-header">
      <div className="header-main">
        <div className="header-left">
          {showBackButton && (
            <Button 
              type="text"
              icon={<img src='ArrowLeft.png' alt='Arrow left'/>}
              onClick={handleBack}
              className="back-button"
            />
          )}
          <h1 className="header-title">{title}</h1>
        </div>
        
        <div className="header-right">
          {showFilterButton && (
            <Select
              defaultValue={filterValue}
              onChange={setFilterValue}
              options={filterOptions}
              className="filter-select"
              suffixIcon={<img src='bottomArrow.png' alt='filterButton' />}
            />
          )}
          
          {showEditButton && (
            <Button 
              onClick={onEditClick}
              className="edit-button"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;