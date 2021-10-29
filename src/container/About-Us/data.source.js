import React from 'react';
import axios from "axios";
import { FaTwitter,FaInstagram,FaFacebookSquare } from "react-icons/fa";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  export const Content10DataSource = {
  
    wrapper: {
      className: 'home-page-wrapper content1-wrapper kv3sdw6jx6-editor_css',
    },
    OverPack: { className: 'home-page content1', playScale: 0.3 },
    imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
    img: {
      // children: 'https://hypecpl.com/wp-content/uploads/2019/09/Whoarewe.png',
      children: 'https://hypecpl.com/wp-content/uploads/2019/09/Whoarewe.png',
    },
    textWrapper: {
      className: 'content1-text kv3s58q0hk-editor_css',
      md: 14,
      xs: 24,
    },
    title: {
      className: 'content1-title',
      children: (
        <span>
          <h2 style={{marginTop:"55px"}}>About Us</h2>
        </span>
      ),
    },
    content: {
      className: 'content1-content',
      children: (
        <span>
          <p style={{fontSize:"22px"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </span>
      ),
    },
  };


export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
            <span style={{textAlign:'center',borderBottom:'2px solid #000000'}}>
              <p className="adad">Our Services</p>
            </span>
        ),
        className: 'kv3s2l2jv9s-editor_css',
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Flexibility</p>
                </span>
              ),
            },
            // { name: 'content', children: 'Best services' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Quick Response',
            },
            {
              name: 'content',
              // children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Nothing',
            },
            {
              name: 'content',
              // children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.1, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span style={{textAlign:'center'}}>
            <p>Our Team</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <h3>Bilal</h3>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'BackEnd Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
              <span style={{display:"flex",alignItems: "center"}}>
              <ul style={{listStyle:"none",display:"flex"}}>
                <a href="facebook.com"><li><FaFacebookSquare/></li></a>
                <a href="www.instagram.com"><li style={{color:"red"}}><FaInstagram/></li></a>
                <a href="www.twitter.com"><li><FaTwitter/></li></a>
              </ul>
            </span>
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <h3>Osama</h3>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'FrontEnd Developer',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
              <span style={{display:"flex",alignItems: "center"}}>
              <ul style={{listStyle:"none",display:"flex"}}>
                <a href="facebook.com"><li><FaFacebookSquare/></li></a>
                <a href="www.instagram.com"><li style={{color:"red"}}><FaInstagram/></li></a>
                <a href="www.twitter.com"><li><FaTwitter/></li></a>
              </ul>
            </span>
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <h3>Kashans</h3>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'IT Department',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
              <span style={{display:"flex",alignItems: "center"}}>
              <ul style={{listStyle:"none",display:"flex"}}>
                <a href="facebook.com"><li><FaFacebookSquare/></li></a>
                <a href="www.instagram.com"><li style={{color:"red"}}><FaInstagram/></li></a>
                <a href="www.twitter.com"><li><FaTwitter/></li></a>
              </ul>
            </span>
            },
          ],
        },
      },
    ],
  },
};
