import React from "react";

import { Button } from "src/components";

import styles from "./Table.module.scss";

const Table = ({ data, onEdit, onDelete }) => {

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item?.title}</td>
                <td>
                  <img
                    className={styles.avatar}
                    src={item?.imageUrl}
                    alt="avatar"
                  />
                </td>
                <td>
                  <Button classNames={[styles.editButton]} text='Edit' onClick={() => onEdit(item?.title, item)} />
                  <Button classNames={[styles.deleteButton]} text='Delete' onClick={() => onDelete(item?.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
