CREATE ROLE regalon WITH LOGIN PASSWORD 'admin';

CREATE DATABASE regalon WITH OWNER regalon ENCODING 'UTF8';

CREATE SEQUENCE hibernate_sequence
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 100
  CACHE 1;

ALTER TABLE hibernate_sequence OWNER TO regalon;

CREATE TABLE public.product (
    id bigint NOT NULL,
    title character varying(512) COLLATE pg_catalog."default" NOT NULL,
    description character varying(2048) COLLATE pg_catalog."default",
    url character varying(512) COLLATE pg_catalog."default" NOT NULL,
    img_url character varying(512) COLLATE pg_catalog."default",
    price numeric,
    filter_gender character(1) COLLATE pg_catalog."default",
    filter_age integer,
    filter_creativity integer,
    filter_sporty integer,
    filter_intellectual integer,
    filter_reliability integer,
    CONSTRAINT product_pkey PRIMARY KEY (id)
)

ALTER TABLE public.product OWNER to regalon;    