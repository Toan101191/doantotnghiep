USE [datn]
GO
/****** Object:  Table [dbo].[chitiethoadon]    Script Date: 11/06/2023 11:48:18 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chitiethoadon](
	[mact] [int] NOT NULL,
	[mahd] [int] NOT NULL,
	[matruyen] [int] NOT NULL,
	[soluong] [int] NOT NULL,
	[makh] [int] NULL,
 CONSTRAINT [PK_chitiethoadon] PRIMARY KEY CLUSTERED 
(
	[mact] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[donhang]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[donhang](
	[tinhtrang] [int] NULL,
	[mahd] [int] NOT NULL,
	[madon] [int] IDENTITY(1,1) NOT NULL,
	[mact] [int] NULL,
	[makh] [int] NULL,
 CONSTRAINT [PK_donhang_1] PRIMARY KEY CLUSTERED 
(
	[madon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoadon]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoadon](
	[mahd] [int] NOT NULL,
	[makh] [int] NOT NULL,
	[ngaygd] [datetime] NULL,
	[gia] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[mahd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[khachhang]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[khachhang](
	[makh] [int] IDENTITY(1,1) NOT NULL,
	[tenkh] [nvarchar](50) NULL,
	[sdt] [char](10) NULL,
	[diachi] [nvarchar](200) NULL,
	[tk] [varchar](50) NULL,
	[mk] [varchar](50) NULL,
	[maquyen] [int] NULL,
 CONSTRAINT [PK__khachhan__7A21BB4CE87C3412] PRIMARY KEY CLUSTERED 
(
	[makh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nhanvien]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nhanvien](
	[manv] [int] IDENTITY(1,1) NOT NULL,
	[tennv] [nvarchar](50) NULL,
	[sdt] [char](10) NULL,
	[diachi] [nvarchar](200) NULL,
	[hinhanh] [nvarchar](200) NULL,
 CONSTRAINT [PK__nhanvien__7A21B37D46B6D3B7] PRIMARY KEY CLUSTERED 
(
	[manv] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nxb]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nxb](
	[manxb] [int] IDENTITY(1,1) NOT NULL,
	[tennxb] [nvarchar](200) NULL,
	[diachi] [nvarchar](200) NULL,
	[sdt] [char](10) NULL,
	[email] [varchar](50) NULL,
 CONSTRAINT [PK__nxb__0A7B7E7E46F8A492] PRIMARY KEY CLUSTERED 
(
	[manxb] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[quyen]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[quyen](
	[maquyen] [int] IDENTITY(1,1) NOT NULL,
	[tenquyen] [nvarchar](20) NULL,
 CONSTRAINT [PK__quyen__AA0E356E4145E0BF] PRIMARY KEY CLUSTERED 
(
	[maquyen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[slide]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[slide](
	[hinhanh] [varchar](200) NULL,
	[maslide] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__slide__44DA274B5D95EBE6] PRIMARY KEY CLUSTERED 
(
	[maslide] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tacgia]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tacgia](
	[matg] [int] IDENTITY(1,1) NOT NULL,
	[tentg] [nvarchar](50) NULL,
	[diachi] [nvarchar](200) NULL,
	[sdt] [char](10) NULL,
	[hinhanh] [nvarchar](200) NULL,
 CONSTRAINT [PK__tacgia__7A217E6AB0ED7FB5] PRIMARY KEY CLUSTERED 
(
	[matg] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[theloai]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[theloai](
	[matl] [int] IDENTITY(1,1) NOT NULL,
	[tentl] [nvarchar](200) NULL,
	[mota] [nvarchar](500) NULL,
 CONSTRAINT [PK__theloai__7A217E177D673206] PRIMARY KEY CLUSTERED 
(
	[matl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tintuc]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tintuc](
	[matin] [int] IDENTITY(1,1) NOT NULL,
	[nd] [nvarchar](1000) NULL,
	[tieude] [nvarchar](200) NULL,
	[hinhanh] [nvarchar](200) NULL,
	[loaitin] [int] NULL,
	[ngay] [datetime] NULL,
 CONSTRAINT [PK__tintuc__148A0B40C573F8A4] PRIMARY KEY CLUSTERED 
(
	[matin] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[truyen]    Script Date: 11/06/2023 11:48:19 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[truyen](
	[matruyen] [int] IDENTITY(1,1) NOT NULL,
	[tentruyen] [nvarchar](200) NULL,
	[matg] [int] NULL,
	[matl] [int] NULL,
	[manxb] [int] NULL,
	[mota] [nvarchar](500) NULL,
	[hinhanh] [nvarchar](200) NULL,
	[gia] [float] NULL,
	[soluong] [int] NULL,
 CONSTRAINT [PK__truyen__562C3C24E6C6F777] PRIMARY KEY CLUSTERED 
(
	[matruyen] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[donhang] ADD  CONSTRAINT [DF_donhang_tinhtrang]  DEFAULT ((1)) FOR [tinhtrang]
GO
ALTER TABLE [dbo].[khachhang] ADD  CONSTRAINT [DF_khachhang_quyen]  DEFAULT ((2)) FOR [maquyen]
GO
ALTER TABLE [dbo].[chitiethoadon]  WITH CHECK ADD  CONSTRAINT [FK_chitiethoadon_khachhang] FOREIGN KEY([makh])
REFERENCES [dbo].[khachhang] ([makh])
GO
ALTER TABLE [dbo].[chitiethoadon] CHECK CONSTRAINT [FK_chitiethoadon_khachhang]
GO
ALTER TABLE [dbo].[donhang]  WITH CHECK ADD  CONSTRAINT [FK_donhang_chitiethoadon] FOREIGN KEY([mact])
REFERENCES [dbo].[chitiethoadon] ([mact])
GO
ALTER TABLE [dbo].[donhang] CHECK CONSTRAINT [FK_donhang_chitiethoadon]
GO
ALTER TABLE [dbo].[donhang]  WITH CHECK ADD  CONSTRAINT [FK_donhang_hoadon] FOREIGN KEY([mahd])
REFERENCES [dbo].[hoadon] ([mahd])
GO
ALTER TABLE [dbo].[donhang] CHECK CONSTRAINT [FK_donhang_hoadon]
GO
ALTER TABLE [dbo].[hoadon]  WITH CHECK ADD  CONSTRAINT [FK_hoadon_khachhang] FOREIGN KEY([makh])
REFERENCES [dbo].[khachhang] ([makh])
GO
ALTER TABLE [dbo].[hoadon] CHECK CONSTRAINT [FK_hoadon_khachhang]
GO
ALTER TABLE [dbo].[khachhang]  WITH CHECK ADD  CONSTRAINT [FK_khachhang_quyen] FOREIGN KEY([maquyen])
REFERENCES [dbo].[quyen] ([maquyen])
GO
ALTER TABLE [dbo].[khachhang] CHECK CONSTRAINT [FK_khachhang_quyen]
GO
ALTER TABLE [dbo].[truyen]  WITH CHECK ADD  CONSTRAINT [fk_truyen_manxb] FOREIGN KEY([manxb])
REFERENCES [dbo].[nxb] ([manxb])
GO
ALTER TABLE [dbo].[truyen] CHECK CONSTRAINT [fk_truyen_manxb]
GO
ALTER TABLE [dbo].[truyen]  WITH CHECK ADD  CONSTRAINT [fk_truyen_matg] FOREIGN KEY([matg])
REFERENCES [dbo].[tacgia] ([matg])
GO
ALTER TABLE [dbo].[truyen] CHECK CONSTRAINT [fk_truyen_matg]
GO
ALTER TABLE [dbo].[truyen]  WITH CHECK ADD  CONSTRAINT [fk_truyen_matl] FOREIGN KEY([matl])
REFERENCES [dbo].[theloai] ([matl])
GO
ALTER TABLE [dbo].[truyen] CHECK CONSTRAINT [fk_truyen_matl]
GO
