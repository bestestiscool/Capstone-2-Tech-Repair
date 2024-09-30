--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    code_link character varying(255),
    live_demo_link character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.projects OWNER TO daniel;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO daniel;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: repair_costs; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.repair_costs (
    id integer NOT NULL,
    device_type character varying(100) NOT NULL,
    model character varying(100) NOT NULL,
    repair_type character varying(100) NOT NULL,
    cost numeric(10,2) NOT NULL,
    estimated_time character varying(50) NOT NULL
);


ALTER TABLE public.repair_costs OWNER TO daniel;

--
-- Name: repair_costs_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.repair_costs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.repair_costs_id_seq OWNER TO daniel;

--
-- Name: repair_costs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.repair_costs_id_seq OWNED BY public.repair_costs.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: repair_costs id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.repair_costs ALTER COLUMN id SET DEFAULT nextval('public.repair_costs_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
948dfa52-aa8d-4f0b-bf9a-ac05a531b464	35d8d60a7e949f93a975b78e3107cd515d4b02dac76fe1da27bea2463e21b545	2024-09-30 10:32:47.840192-04	20240929205323_init	\N	\N	2024-09-30 10:32:47.780632-04	1
dfc88a5b-c810-4fe4-9eee-a6dcba201509	375df54bfd569efcd5574d74c3044376829b586d23b2badd39c88089fdeba635	2024-09-30 10:32:47.855787-04	20240929211428_add_user_relation_to_repair_cost	\N	\N	2024-09-30 10:32:47.84369-04	1
9511a9b3-bf76-4f53-8125-58bbcd5bc220	8840a9e8814005732632cb5be2d172ff81115ef1a42176e129f2af3e0b4b0705	2024-09-30 10:32:47.903761-04	20240930141513_init	\N	\N	2024-09-30 10:32:47.860059-04	1
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.projects (id, name, description, code_link, live_demo_link, created_at, updated_at) FROM stdin;
1	First Project	This is the first sample project created using a seeder	https://github.com/bestestiscool/Unit_42_Hatchaway_Snack_or_booze	https://first-project-demo.com	2024-09-30 10:58:24.491015	2024-09-30 10:58:24.491015
2	Second Project	This is the second sample project created using a seeder	https://github.com/bestestiscool/Unit_41.3_React_History_exercise_jokes	https://second-project-demo.com	2024-09-30 10:58:24.491015	2024-09-30 10:58:24.491015
\.


--
-- Data for Name: repair_costs; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.repair_costs (id, device_type, model, repair_type, cost, estimated_time) FROM stdin;
1	Phone	iPhone 12	Cracked Screen	250.00	1-2 hours
2	Phone	iPhone 12	Battery Issue	150.00	1-2 hours
3	Phone	iPhone 12	Water Damage	300.00	1-2 days
4	Phone	iPhone 11	Cracked Screen	220.00	1-2 hours
5	Phone	iPhone 11	Battery Issue	140.00	1-2 hours
6	Phone	iPhone 11	Water Damage	280.00	1-2 days
7	Phone	Samsung Galaxy S21	Cracked Screen	270.00	1-2 hours
8	Phone	Samsung Galaxy S21	Battery Issue	140.00	1-2 hours
9	Phone	Samsung Galaxy S21	Water Damage	310.00	1-2 days
10	Phone	Samsung Galaxy S20	Cracked Screen	260.00	1-2 hours
11	Phone	Samsung Galaxy S20	Battery Issue	135.00	1-2 hours
12	Phone	Samsung Galaxy S20	Water Damage	300.00	1-2 days
13	Phone	Google Pixel 5	Cracked Screen	230.00	1-2 hours
14	Phone	Google Pixel 5	Battery Issue	130.00	1-2 hours
15	Phone	Google Pixel 5	Water Damage	250.00	1-2 days
16	Phone	Google Pixel 4	Cracked Screen	220.00	1-2 hours
17	Phone	Google Pixel 4	Battery Issue	125.00	1-2 hours
18	Phone	Google Pixel 4	Water Damage	240.00	1-2 days
19	Laptop	MacBook Pro (2020)	Cracked Screen	600.00	1-2 days
20	Laptop	MacBook Pro (2020)	Battery Issue	200.00	1-2 hours
21	Laptop	MacBook Pro (2019)	Cracked Screen	580.00	1-2 days
22	Laptop	MacBook Pro (2019)	Battery Issue	190.00	1-2 hours
23	Laptop	MacBook Air (2020)	Cracked Screen	550.00	1-2 days
24	Laptop	MacBook Air (2020)	Battery Issue	180.00	1-2 hours
25	Laptop	Dell XPS 13	Cracked Screen	500.00	1-2 days
26	Laptop	Dell XPS 13	Battery Issue	160.00	1-2 hours
27	Laptop	Dell XPS 15	Cracked Screen	550.00	1-2 days
28	Laptop	Dell XPS 15	Battery Issue	180.00	1-2 hours
29	Laptop	HP Spectre x360	Cracked Screen	530.00	1-2 days
30	Laptop	HP Spectre x360	Battery Issue	170.00	1-2 hours
31	Laptop	Lenovo ThinkPad X1 Carbon	Cracked Screen	520.00	1-2 days
32	Laptop	Lenovo ThinkPad X1 Carbon	Battery Issue	175.00	1-2 hours
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.projects_id_seq', 2, true);


--
-- Name: repair_costs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.repair_costs_id_seq', 32, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: repair_costs repair_costs_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.repair_costs
    ADD CONSTRAINT repair_costs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

