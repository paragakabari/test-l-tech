import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Styles from "./CommonTable.module.css"
interface Column {
    label: string;
    key: string;
    render?: (value: any, row: any) => JSX.Element | string;
}

interface CommonTableProps {
    columns: Column[];
    data: any[];
}

const CommonTable: React.FC<CommonTableProps> = ({ columns, data }) => {
    return (
        <div className="p-1">
            <Table responsive className={`${Styles.table} ${Styles.tableMain}`}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={row.parent ? Styles.childRow : ''}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>
                                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CommonTable;
