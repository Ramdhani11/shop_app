"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { LuPackagePlus } from "react-icons/lu";
import { Modal, ModalDelete, TableItem } from "@/components";
import { dummyData } from "@/constant";
import { DataDummy } from "@/types";

const page = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [datas, setDatas] = useState<DataDummy[]>([]);

  const deleteHandler = (e: MouseEvent,id: number) => {
    e.preventDefault();
    alert(id)
    
  };

  const modalHandler = (e: MouseEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  useEffect(() => {
    setDatas(dummyData);
  }, [datas]);

  return (
    <>
      {deleteModal ? <ModalDelete handlerModal={deleteHandler} /> : null}
      {showModal ? <Modal handlerModal={modalHandler} /> : null}
      <div className="bg-white h-full w-full rounded-[20px] overflow-hidden relative">
        <div className="p-[20px] bg-white flex justify-between items-center">
          <span>Total Barang (120)</span>
          <div className="flex flex-row">
            <div className="flex flex-row border-[2px] border-borderColor rounded-md p-1  items-center mr-2">
              <BiSearchAlt2 className="mr-2 text-grey" />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none"
              />
            </div>
            <div
              onClick={modalHandler}
              className="flex flex-row  bg-primary text-white rounded-md py-1 px-3  items-center font-custom-medium cursor-pointer hover:bg-[rgb(2,36,17)]"
            >
              <LuPackagePlus className="mr-2 " />
              Tambah Barang
            </div>
          </div>
        </div>

        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-secondary w-full">
              <th className="px-8 py-4 text-left">Nama Barang</th>
              <th className="px-8 py-4 text-left">Foto Barang</th>
              <th className="px-8 py-4 text-left">Harga Beli</th>
              <th className="px-8 py-4 text-left">Harga Jual</th>
              <th className="px-8 py-4 text-left">Stok</th>
              <th className="px-8 py-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {datas.map((data) => {
              return <TableItem deleteHandler={deleteHandler} data={data} />;
            })}
          </tbody>
        </table>
        <div className="border-t-[2px] border-borderColor p-[20px] bg-white w-full flex justify-between items-center absolute bottom-0">
          <h3 className="font-custom-medium text-[14px] text-grey">
            Menampilkan 1 - 5 dari 100
          </h3>
          <div>Haii</div>
        </div>
      </div>
    </>
  );
};

export default page;
