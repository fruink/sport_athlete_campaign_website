-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 25, 2017 at 06:10 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_eddylacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subs`
--

CREATE TABLE `tbl_subs` (
  `subs_id` int(7) UNSIGNED NOT NULL,
  `subs_email` varchar(40) NOT NULL,
  `subs_birthday` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_subs`
--

INSERT INTO `tbl_subs` (`subs_id`, `subs_email`, `subs_birthday`) VALUES
(1, 'querytest@test.com', 'testbirt'),
(2, 'test2@test.ca', '09/11/96'),
(3, 'qnnkennedy922@gmail.com', '09/11/96'),
(4, 'merrychristmas@test.ca', '12/25/17'),
(5, 'thankyoutest@gmail.com', '12/25/17'),
(6, 'test3@gmail.com', '12/25/17'),
(7, 'test4@gmail.com', '12/25/17'),
(8, 'test5@gmail.com', 'n/a'),
(9, 'thankyoutest2@gmail.com', '12/25/17'),
(10, 'thankyoutest2@gmail.com', '12/25/17'),
(11, 'thankyoutest2@gmail.com', '12/25/17'),
(12, 'testfinal@gmail.com', 'n/a'),
(13, 'testfinal@gmail.com', 'n/a'),
(14, '', ''),
(15, '', ''),
(16, '', ''),
(17, '', ''),
(18, '', ''),
(19, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_subs`
--
ALTER TABLE `tbl_subs`
  ADD PRIMARY KEY (`subs_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_subs`
--
ALTER TABLE `tbl_subs`
  MODIFY `subs_id` int(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
