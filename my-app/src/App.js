import { useState, useEffect } from "react";

import { getArticlesRequest, updateArticleRequest, deleteArticleRequest } from "src/api/services";
import { Modal } from "src/components";

import { Table, Pagination } from "./components";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [articleTitle, setArticleTitle] = useState('')
  const [modalConfig, setModalConfig] = useState({ isVisible: false })

  useEffect(() => {
    getArticlesRequest()
      .then((result) => {
        setData(result?.data);
      })
      .catch((err) => alert(err));
  }, []);

  const getCurrentTableData = () => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + Number(pageSize);

    return data?.slice(firstPageIndex, lastPageIndex);
  };

  const hideModal = () => setModalConfig({ isVisible: false })

  const onChange = (value) => setArticleTitle(value);


  //Id is missing in API data and I can't edit or delete an article
  const handleEditRequest = (article) => {
    updateArticleRequest({
      url: article?.url,
      title: articleTitle,
      imageUrl: article?.imageUrl
    }, article?.id)

    hideModal();
  }

  const handleDeleteRequest = (id) => {
    deleteArticleRequest(id)
    hideModal();
  }

  const onEdit = (value, article) => {
    setArticleTitle(value);
    setModalConfig({
      isVisible: true,
      isEdit: true,
      title: 'Edit Article',
      okText: 'Save',
      onCancel: hideModal,
      onOk: () => handleEditRequest(article)
    })
  }

  const onDelete = (id) => {
    setModalConfig({
      isVisible: true,
      isEdit: false,
      title: 'Delete Article',
      okText: 'Delete',
      onCancel: hideModal,
      onOk: () => handleDeleteRequest(id)
    })
  }

  return (
    <div className="App">
      <Table data={getCurrentTableData()} onDelete={onDelete} onEdit={onEdit} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        data={data}
      />
      <Modal config={modalConfig} value={articleTitle} onChange={onChange} />
    </div>
  );
}

export default App;
