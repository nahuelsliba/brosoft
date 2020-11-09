CREATE ROLE regalon WITH LOGIN PASSWORD 'admin';

CREATE DATABASE regalon WITH OWNER regalon ENCODING 'UTF8';

CREATE SEQUENCE hibernate_sequence
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 100
  CACHE 1;

ALTER TABLE hibernate_sequence OWNER TO regalon;

-- Table: public.product

-- DROP TABLE public.product;

CREATE TABLE public.product (
    id bigint NOT NULL,
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description character varying(512) COLLATE pg_catalog."default",
    url character varying(512) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(512) COLLATE pg_catalog."default",
    price numeric,
    CONSTRAINT product_pkey PRIMARY KEY (id)
)

ALTER TABLE public.product OWNER to regalon;    